import React, { useState } from 'react';
import {
    CardContainer,
    CardHeader,
    CardTitle,
    CardDescription,
    BadgeContainer,
    PriorityBadge,
    DeadlineBadge,
    CardFooter,
    DateInfo,
    ResponsibleInfo,
    ActionButtons,
    FooterRow,
    AttachmentInfo,
    ResponsibleImage, 
    ResponsibleRow,
    ReadMoreButton,
    DescriptionWrapper
} from './styles';

import ModalDeleteConfirm from '../ModalDeleteConfirm/index';
import api from '../../api';
import ModalEditTask from '../ModalEditTask';
import { differenceInDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { FiPaperclip } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import ModalAttachments from '../ModalAttachments';
import { useAuth } from '../../hooks/AuthContext';

const TaskCard = ({
    task,
    onEdit,
    onDelete,
    isDragging = false, 
    colaboradores,
    onAttachmentsUpdated,
}) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAttachmentsModal, setShowAttachmentsModal] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { userRole } = useAuth();
    const hasOverflow = task.descricao.length > 120;


    const handleDeleteModal = () => {
        setShowDeleteModal(true);
    };
    const handleEditModal = () => {
        setShowEditModal(true);
    };

    const handleDeleteTask = (id) => {
        onDelete(task.id)
        setShowDeleteModal(false)
        return;
    };

    const calcularPrazo = (data) => {
        if (!data) return '';

        if (['No Prazo', 'Urgente', 'Atrasado'].includes(data)) {
            return data;
        }
        try {
            const hoje = new Date();

            const diferencaDias = differenceInDays(new Date(data), hoje);

            if (diferencaDias < 0) return 'Atrasada';
            if (diferencaDias < 2) return 'Urgente';
            if (diferencaDias >= 2) return 'No Prazo';
            } catch {
                toast.error('Erro ao calcular prazo da tarefa');
            }

        return task.prazoEntrega;
    };

    const formatarDataParaExibicao = (data) => {
        if (!data) return '';

        if (typeof data === 'string' && data.includes('de ')) {
            return data;
        }

        try {
            const dateObj = new Date(data);
            
            if (isNaN(dateObj.getTime())) return data;

            return format(dateObj, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
        } catch (e) {
            return data || '';
        }
        
    };

    const prioridade = task.prioridade;
    const dataEntrega = task.prazoEntrega;
    const prazoCalculado = calcularPrazo(dataEntrega);
    const dataFormatada = formatarDataParaExibicao(dataEntrega);
    const responsavel = task.responsavel;
    const temAnexos = task.anexos && task.anexos.length > 0;

    return (
        <>
            <CardContainer $isDragging={isDragging} tabIndex="0" role="article" aria-labelledby={`task-title-${task.id}`}>
                <CardHeader>
                    <CardTitle id={`task-title-${task.id}`}>{task.titulo}</CardTitle>
                    <ActionButtons>
                        <button
                            onClick={handleEditModal}
                            title="Editar tarefa"
                            aria-label={`Editar tarefa: ${task.titulo}`}
                            type="button"
                        >
                            <MdEdit size={15} aria-hidden="true" />
                        </button>
                        { userRole !== "COLABORADOR" &&
                            <button
                                onClick={handleDeleteModal}
                                title="Excluir tarefa"
                                aria-label={`Excluir tarefa: ${task.titulo}`}
                                type="button"
                            >
                                <FaTrashAlt size={13} aria-hidden="true" />
                            </button>}
                    </ActionButtons>
                </CardHeader>

                <DescriptionWrapper>
                    <CardDescription aria-label="Descrição da tarefa" $expanded={expanded}>
                        {task.descricao}
                    </CardDescription>

                    {hasOverflow && (
                        <ReadMoreButton onClick={() => setExpanded(prev => !prev)}>
                            {expanded ? 'Ler menos' : 'Ler mais'}
                        </ReadMoreButton>
                    )}
                </DescriptionWrapper>

                { task.status !== 'CONCLUIDA' && <BadgeContainer aria-label="Informações de prioridade e prazo">
                    {prioridade && (
                        <PriorityBadge $priority={prioridade.toLowerCase()} aria-label={`Prioridade: ${prioridade}`}>
                            {prioridade}
                        </PriorityBadge>
                    )}

                    {(prazoCalculado || task.prazoEntrega) && (
                        <DeadlineBadge $deadline={prazoCalculado.toLowerCase()} aria-label={`Prazo: ${prazoCalculado}`}>
                            {prazoCalculado}
                        </DeadlineBadge>
                    )}
                </BadgeContainer> }

                { task.status === 'CONCLUIDA' && <BadgeContainer>
                    <DeadlineBadge $deadline={'concluida'} aria-label="Status: Concluída">
                        Concluída
                    </DeadlineBadge>
                </BadgeContainer> }

                {temAnexos && (
                    <AttachmentInfo
                        title="Ver anexos"
                        aria-label={`Ver ${task.anexos.length} anexos`}
                        onClick={() => setShowAttachmentsModal(true)}
                        tabIndex="0"
                        role="button"
                        onKeyDown={(e) => { if (e.key === 'Enter') setShowAttachmentsModal(true); }}
                    >
                        <FiPaperclip aria-hidden="true" /> {task.anexos.length >1 ? `${task.anexos.length} anexos` : `${task.anexos.length} anexo`}
                    </AttachmentInfo>
                )}

                <CardFooter>
                    <FooterRow>
                        
                            <DateInfo aria-label={`Data de entrega: ${dataFormatada}`}>
                                {dataFormatada}
                            </DateInfo>

                        <ResponsibleRow aria-label={`Responsável: ${responsavel.nome}`}>
                            {(responsavel.foto !== 'foto_url' && responsavel.foto !==null) && 
                            <ResponsibleImage 
                            src={responsavel.foto} alt={`Foto de ${responsavel.nome}`}/>}
                            {(responsavel.foto === 'foto_url' || responsavel.foto === null) && 
                            <FaUserCircle size={30} color="#666" aria-hidden="true" />} 
                            <ResponsibleInfo>
                                {responsavel.nome}
                            </ResponsibleInfo>
                        </ResponsibleRow>
                    </FooterRow>
                </CardFooter>
            </CardContainer>

            {showEditModal && <ModalEditTask
                task={task}
                onClose={() => setShowEditModal(false)}
                onSave={onEdit}
                isOpen={showEditModal}
                colaboradores={colaboradores}
            />}

            {showDeleteModal && <ModalDeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={() => handleDeleteTask(task.id)}
                taskTitle={task.titulo}
            />}

            {showAttachmentsModal && (
                <ModalAttachments
                    isOpen={showAttachmentsModal}
                    onClose={() => setShowAttachmentsModal(false)}
                    task={task}
                    onAttachmentsUpdated={onAttachmentsUpdated}
                />
            )}
        </>

    );
};

export default TaskCard;