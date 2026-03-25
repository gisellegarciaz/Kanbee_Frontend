import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./styles";
import { BiCalendar } from "react-icons/bi";
import api from '../../api';
import { toast } from "react-toastify";
import { isBefore, addMinutes, differenceInCalendarDays } from 'date-fns';
import { differenceInBusinessDays } from '../../../node_modules/date-fns/differenceInBusinessDays';



registerLocale('pt-BR', ptBR);

const ModalNewTask = ({ isOpen, onClose, onCreateTask, colaboradores }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Média");
    const [responsible, setResponsible] = useState();
    const [deadline, setDeadline] = useState(new Date());

    
    const resetForm = () => {
        setTitle("");
        setDescription("");
        setPriority("Média");
        setResponsible();
        setDeadline(new Date());
    };

    const handleSubmit = async () => {
        if (!title.trim()) {
            toast.error("O título é obrigatório!");
            return;
        }

        const deadlineDifference = differenceInBusinessDays(new Date(deadline), new Date());
        const deadlineIsPast = differenceInCalendarDays(new Date(deadline), new Date()) < 0;
        const deadlineIsToday = differenceInCalendarDays(new Date(deadline), new Date()) === 0;
        const prazoCurto = deadlineDifference < 2;

        if (deadlineIsPast) {
            toast.error("Não é possível criar tarefas com data de entrega já expirada.");
            return;
        }
        if (!responsible) {
            toast.error("É obrigatório atribuir um responsável para a tarefa.");
            return;
        }
        if (prazoCurto) {
            toast.info("Prazo curto! Prioridade definida como Alta.");
        }

        let backendPriority = "MEDIA";
        if (priority === "Baixa") backendPriority = "BAIXA";
        if (priority === "Alta") backendPriority = "ALTA";

        const newTask = {
            titulo: title,
            descricao: description,
            prazoEntrega: deadline,
            prioridade: prazoCurto ? "ALTA" : backendPriority,
            responsavelId: responsible,
        };

        onCreateTask(newTask);
        resetForm();
        onClose();
    };

    const handleCancel = () => {
        resetForm();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <S.Overlay onClick={handleCancel}>
            <S.Modal 
                onClick={(e) => e.stopPropagation()} 
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modal-new-task-title"
            >
                <S.Title id="modal-new-task-title">Nova Tarefa</S.Title>

                <S.Label htmlFor="task-title">Título *</S.Label>
                <S.Input
                    id="task-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Digite o título da tarefa"
                    aria-required="true"
                />

                <S.Label htmlFor="task-description">Descrição</S.Label>
                <S.TextArea
                    id="task-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descreva a tarefa..."
                />

                <S.Label htmlFor="task-priority">Prioridade *</S.Label>
                <S.Select 
                    id="task-priority"
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                    aria-required="true"
                >
                    <option value="Baixa">Baixa</option>
                    <option value="Média">Média</option>
                    <option value="Alta">Alta</option>
                </S.Select>

                <S.Label htmlFor="task-responsible">Responsável</S.Label>
                <S.Select
                    id="task-responsible"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                    placeholder="Nome do responsável"
                >
                    <option value="" hidden>Selecione um responsável</option>
                    {colaboradores.map((colaborador) => (
                        <option key={colaborador.id} value={colaborador.id}>
                            {colaborador.nomeCompleto}
                        </option>
                    ))}
                </S.Select>

                <S.Label htmlFor="task-deadline">Prazo de Entrega </S.Label>
                <DatePicker
                    id="task-deadline"
                    selected={deadline}
                    showIcon
                    icon={<BiCalendar aria-hidden="true" />}
                    onChange={(date) => setDeadline(date)}
                    dateFormat="dd/MM/yyyy"
                    locale="pt-BR"
                    placeholderText="Selecione uma data"
                    customInput={<S.Input id="task-deadline" readOnly style={{ cursor: 'pointer' }} aria-label="Selecionar data de entrega" />}
                />

                <S.ButtonGroup>
                    <S.CancelButton onClick={handleCancel} aria-label="Cancelar criação de tarefa">
                        Cancelar
                    </S.CancelButton>
                    <S.CreateButton onClick={handleSubmit} aria-label="Confirmar criação de tarefa">
                        Criar Tarefa
                    </S.CreateButton>
                </S.ButtonGroup>
            </S.Modal>
        </S.Overlay>
    );
};

export default ModalNewTask;
