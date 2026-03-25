import React, { useState } from 'react';
import * as S from './styles';
import { FaDownload, FaTrashAlt, FaPaperclip } from 'react-icons/fa';
import api from '../../api';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const getAttachmentName = (attachment, index) => {
    return attachment?.nomeArquivo || `Anexo ${index + 1}`;
};

const getAttachmentUrl = (attachment) => {
    return attachment?.urlAcesso || null;
};

const getAttachmentId = (attachment) => {
    return attachment?.id || null;
};

const getAttachmentType = (attachment) => {
    return attachment?.tipoArquivo || 'N/A';
};

const formatUploadDate = (attachment) => {
    const dateField = attachment?.dataUpload ||
        attachment?.dataCriacao ||
        attachment?.createdAt ||
        attachment?.data;

    if (!dateField) return 'Data não disponível';

    try {
        const dateObj = new Date(dateField);
        if (isNaN(dateObj.getTime())) return 'Data inválida';

        return format(dateObj, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    } catch (error) {
        return 'Data inválida';
    }
};

const ModalAttachments = ({ isOpen, onClose, task, onAttachmentsUpdated }) => {
    const [loadingId, setLoadingId] = useState(null);

    if (!isOpen) return null;

    const attachments = task?.anexos || [];

    const handleDownload = (attachment, index) => {
        const url = getAttachmentUrl(attachment);

        if (!url) {
            toast.error('URL do anexo não disponível para download.');
            return;
        }

        try {
            window.open(url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            toast.error('Não foi possível abrir o anexo para download.');
        }
    };

    const handleDelete = async (attachment, index) => {
        const attachmentId = getAttachmentId(attachment);

        if (!task?.id || !attachmentId) {
            toast.error('Não foi possível identificar o anexo para exclusão.');
            return;
        }

        try {
            setLoadingId(attachmentId);
            await api.delete(`/tarefas/anexos/${attachmentId}`);

            const updatedAttachments = attachments.filter((a) => getAttachmentId(a) !== attachmentId);

            if (onAttachmentsUpdated) {
                onAttachmentsUpdated(task.id, updatedAttachments);
            }

            toast.success('Anexo excluído com sucesso!');
        } catch (error) {
            toast.error('Erro ao excluir anexo.');
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <S.Overlay onClick={onClose}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.Title>
                    <FaPaperclip size={20} />
                    Anexos da tarefa
                </S.Title>

                {attachments.length === 0 ? (
                    <S.EmptyText>Esta tarefa não possui anexos.</S.EmptyText>
                ) : (
                    <S.AttachmentList>
                        {attachments.map((attachment, index) => {
                            const name = getAttachmentName(attachment, index);
                            const id = getAttachmentId(attachment) || `${name}-${index}`;
                            const type = getAttachmentType(attachment);
                            const uploadDate = formatUploadDate(attachment);

                            return (
                                <S.AttachmentItem key={id}>
                                    <S.AttachmentContent>
                                        <S.AttachmentInfo>
                                            <FaPaperclip size={16} />
                                            <S.AttachmentDetails>
                                                <S.AttachmentName title={name}>{name}</S.AttachmentName>
                                                <S.AttachmentMeta>
                                                    <S.AttachmentType>{type}</S.AttachmentType>
                                                    <S.AttachmentDate>{uploadDate}</S.AttachmentDate>
                                                </S.AttachmentMeta>
                                            </S.AttachmentDetails>
                                        </S.AttachmentInfo>
                                    </S.AttachmentContent>

                                    <S.AttachmentActions>
                                        <S.ActionButton
                                            type="button"
                                            onClick={() => handleDownload(attachment, index)}
                                        >
                                            <FaDownload size={14} />
                                            <span>Baixar</span>
                                        </S.ActionButton>
                                        <S.DeleteButton
                                            type="button"
                                            disabled={loadingId === getAttachmentId(attachment)}
                                            onClick={() => handleDelete(attachment, index)}
                                        >
                                            <FaTrashAlt size={13} />
                                            <span>
                                                {loadingId === getAttachmentId(attachment)
                                                    ? 'Excluindo...'
                                                    : 'Excluir'}
                                            </span>
                                        </S.DeleteButton>
                                    </S.AttachmentActions>
                                </S.AttachmentItem>
                            );
                        })}
                    </S.AttachmentList>
                )}

                <S.Footer>
                    <S.CloseButton type="button" onClick={onClose}>
                        Fechar
                    </S.CloseButton>
                </S.Footer>
            </S.Container>
        </S.Overlay>
    );
};

export default ModalAttachments;

