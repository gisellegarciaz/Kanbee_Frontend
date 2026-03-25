import React, { useEffect, useState } from "react";
import { DragDropContext } from '@hello-pangea/dnd';
import { InputContainer, LoadingContainer, Loader } from "./styles";
import CardColumn from "../CardColumn";
import { organizeTasksIntoBoard, movementRules, columnOrder, columnTitles, COLUMN_TO_STATUS } from "./columnData";
import tasksMock from './Tarefas.json';
import { toast } from 'react-toastify';
import api from "../../api";

export default function Dashboard({ boardData, setBoardData, colaboradores }) {


    const validateMovement = (sourceColumnId, destinationColumnId) => {
        if (sourceColumnId === destinationColumnId) {
            return true;
        }


        const sourceIndex = columnOrder.indexOf(sourceColumnId);
        const destinationIndex = columnOrder.indexOf(destinationColumnId);

        if (sourceIndex === -1 || destinationIndex === -1) {
            console.error(`Colunas inválidas: ${sourceColumnId} -> ${destinationColumnId}`);
            return false;
        }

        const allowed = movementRules[sourceColumnId]?.includes(destinationColumnId);

        if (!allowed) {
            toast.error(`O movimento de ${columnTitles[sourceColumnId]} para ${columnTitles[destinationColumnId]} não é permitido!`);
        }


        return allowed;
    };

    const changeTaskStatus = async (taskId, newStatus) => {
        try {
            await api.patch(`/tarefas/${taskId}/status`, {
                status: newStatus,
                posicao: 0
            });
        } catch (error) {
            toast.error('Erro ao atualizar status da tarefa no servidor');
        }
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }


        if (!validateMovement(source.droppableId, destination.droppableId)) {
            const sourceTitle = columnTitles[source.droppableId];
            const destTitle = columnTitles[destination.droppableId];

            if (source.droppableId === 'concluida') {
                toast.warning('Tarefas concluídas não podem ser movidas!');
            } else if (source.droppableId === 'planejada' && destination.droppableId === 'concluida') {
                toast.warning('Não é possível pular estágios!');
            } else if (destination.droppableId === 'planejada' && source.droppableId !== 'planejada') {
                toast.warning('Não é possível retornar uma tarefa a um estágio anterior!');
            } else if (source.droppableId === 'a-fazer' && destination.droppableId === 'planejada') {
                toast.warning('Não é possível retornar uma tarefa ao estágio anterior!');

            }
            return;
        }

        if (!boardData || !boardData.columns) {
            console.error('Dados do quadro indisponíveis!');
            return;
        }

        const startColumn = boardData.columns[source.droppableId];
        const finishColumn = boardData.columns[destination.droppableId];


        if (startColumn === finishColumn) {
            const newTaskIds = Array.from(startColumn.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            };

            setBoardData({
                ...boardData,
                columns: {
                    ...boardData.columns,
                    [newColumn.id]: newColumn,
                },
            });

            toast.success('Tarefa reordenada com sucesso!');
            return;
        }


        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);

        const newStartColumn = {
            ...startColumn,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinishColumn = {
            ...finishColumn,
            taskIds: finishTaskIds,
        };

        const newColumnId = destination.droppableId;
        const backendStatus = COLUMN_TO_STATUS[newColumnId];

        changeTaskStatus(draggableId, backendStatus);

        const updatedTask = boardData.tasks[draggableId];
        let newStatus = destination.droppableId;

        const updatedTasks = {
            ...boardData.tasks,
            [draggableId]: {
                ...updatedTask,
                status: COLUMN_TO_STATUS[newStatus] || newStatus,

                ...(newStatus === 'concluida' && {
                    dataConclusao: new Date().toISOString().split('T')[0]
                })
            }
        };

        setBoardData({
            ...boardData,
            tasks: updatedTasks,
            columns: {
                ...boardData.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn,
            },
        });


        const sourceTitle = columnTitles[source.droppableId];
        const destTitle = columnTitles[destination.droppableId];

        toast.success(`Tarefa movida de ${sourceTitle} para ${destTitle}!`);

        if (destination.droppableId === 'concluida') {
            toast.success('Tarefa concluída com sucesso!');
        } else if (destination.droppableId === 'em-andamento') {
            toast.info('Tarefa em andamento.');
        }

    };

    const handleEditTask = async (updatedTask, taskId, attachments = []) => {

        try {
            await editTaskOnServer(updatedTask, taskId);

            const anexos = [];
            for (const file of attachments) {
                console.log("DEBUG FILE:", file);
                console.log("instanceof File:", file instanceof File);
                console.log("name:", file?.name);
                console.log("type:", file?.type);
                const fd = new FormData();
                fd.append("file", file);

                const response = await api.post(`/tarefas/${taskId}/anexos`, fd);
                anexos.push(response.data);
            }
            const anexosAtualizados =
                anexos.length > 0
                    ? [...boardData.tasks[taskId].anexos, ...anexos]
                    : boardData.tasks[taskId].anexos;

            await editTaskLocally(updatedTask, anexosAtualizados);

            toast.success("Tarefa atualizada com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao atualizar tarefa ou anexos");
            throw error;
        }
    };

    const editTaskOnServer = async (updatedTask) => {
        try {
            const response = await api.put(`/tarefas/${updatedTask.id}`, {
                titulo: updatedTask.titulo,
                descricao: updatedTask.descricao,
                prazoEntrega: updatedTask.prazoEntrega,
                prioridade: updatedTask.prioridade,
                responsavelId: updatedTask.responsavelId,
            });

        } catch (error) {
            toast.error('Erro ao atualizar tarefa no servidor');
            throw error;
        }
    }

    const editTaskLocally = async (updatedTask, anexos) => {
        try {
            const taskId = updatedTask.id;
            const colaboradorEncontrado = await colaboradores?.find(c => c.id == updatedTask.responsavelId);
            const responsavelObjeto = colaboradorEncontrado ? {
                id: colaboradorEncontrado.id,
                nome: colaboradorEncontrado.nomeCompleto,
                foto: colaboradorEncontrado.fotoUrl
            } : null;

            const updatedTasks = {
                ...boardData.tasks,
                [taskId]: {
                    ...boardData.tasks[taskId],
                    titulo: updatedTask.titulo,
                    descricao: updatedTask.descricao,
                    prioridade: updatedTask.prioridade,
                    prazoEntrega: updatedTask.prazoEntrega,
                    responsavel: responsavelObjeto,
                    anexos: anexos ?? boardData.tasks[taskId].anexos
                }
            };

            setBoardData({
                ...boardData,
                tasks: updatedTasks
            });
            toast.success('Tarefa atualizada com sucesso!');
        } catch (error) {
            toast.error('Erro ao atualizar tarefa');
        }
    }

    const handleDeleteTask = async (taskId) => {

        try {
            const response = await api.delete(`/tarefas/${taskId}`);
            await deleteTaskFromBoard(taskId);

        } catch (error) {
            toast.error('Erro ao excluir tarefa no servidor');
            console.log(error.message);
        }
    }

    const deleteTaskFromBoard = (taskId) => {
        try {
            const taskColumn = Object.values(boardData.columns).find(column =>
                column.taskIds.includes(taskId)
            );

            //ele atualiza a coluna e remove o id da tarefa dela
            if (taskColumn) {
                const newTaskIds = taskColumn.taskIds.filter(id => id !== taskId);
                const updatedColumn = {
                    ...taskColumn,
                    taskIds: newTaskIds
                };
                //desconstrói a lista, separando a tarefa excluída
                const { [taskId]: deletedTask, ...remainingTasks } = boardData.tasks;
                setBoardData({
                    ...boardData,
                    tasks: remainingTasks,
                    columns: {
                        ...boardData.columns,
                        [taskColumn.id]: updatedColumn
                    }
                });
                toast.success('Tarefa excluída com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            toast.error('Erro ao excluir tarefa', 'error');
        }
    }

    const handleAttachmentsUpdated = (taskId, anexos) => {
        try {
            const updatedTasks = {
                ...boardData.tasks,
                [taskId]: {
                    ...boardData.tasks[taskId],
                    anexos: anexos || [],
                },
            };

            setBoardData({
                ...boardData,
                tasks: updatedTasks,
            });
        } catch (error) {
            console.error('Erro ao atualizar anexos da tarefa localmente', error);
        }
    };

    if (!boardData) {
        return <LoadingContainer>
            <Loader />
            <h3>Carregando tarefas...</h3>
        </LoadingContainer>;
    }

    if (!boardData.columnOrder || !boardData.columns) {
        return <InputContainer>Erro ao carregar estrutura do quadro.</InputContainer>;
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <InputContainer>
                    <div style={{
                        display: 'flex',
                        overflowX: 'auto',
                        minHeight: 'calc(100vh - 100px)',
                    }}>
                        {boardData.columnOrder.map((columnId, index) => {
                            const column = boardData.columns[columnId];

                            if (!column) {
                                console.warn(`Coluna ${columnId} não encontrada`);
                                return null;
                            }

                            const tasks = column.taskIds
                                .map(taskId => {
                                    const task = boardData.tasks[taskId];
                                    if (!task) {
                                        console.warn(`Tarefa ${taskId} não encontrada na coluna ${columnId}`);
                                    }
                                    return task;
                                })
                                .filter(task => task !== undefined);

                            return (
                                <CardColumn
                                    bgColor={column.bgColor}
                                    title={column.title}
                                    id={columnId}
                                    tasks={tasks}
                                    key={index}
                                    onEdit={handleEditTask}
                                    onDelete={handleDeleteTask}
                                    colaboradores={colaboradores}
                                    onAttachmentsUpdated={handleAttachmentsUpdated}
                                />
                            );
                        })}
                    </div>
                </InputContainer>
            </DragDropContext>

        </>
    );
}