import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./styles";
import { BiCalendar } from "react-icons/bi";
import AttachmentUpload from "../AttachmentUpload";
import api from '../../api';

registerLocale("pt-BR", ptBR);

const ModalEditTask = ({ task, onSave, onClose, isOpen, colaboradores }) => {

    const [attachments, setAttachments] = useState([]);
    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        prioridade: "BAIXA",
        responsavelId: "",
        prazoEntrega: null,
    });

    useEffect(() => {
        setFormData({
            id: task.id,
            titulo: task?.titulo,
            descricao: task.descricao,
            prioridade: task.prioridade,
            responsavelId: task.responsavel.id,
            prazoEntrega: task.prazoEntrega
        });
    }, [task]);

    if (!isOpen) return null;

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        if (!formData.titulo.trim()) {
            alert("O título é obrigatório!");
            return;
        }
        const taskId = task.id;

        await onSave(formData, taskId, attachments); //endpoint do PUT da tarefa
        handleClose();
    };

    const handleClose = () => {
        setAttachments([]);
        onClose();
    };



    return (
        <S.Overlay onClick={onClose}>
            <S.Modal
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-edit-task-title"
            >

                <S.Title id="modal-edit-task-title">Editar Tarefa</S.Title>

                <S.Label htmlFor="edit-task-title">Título *</S.Label>
                <S.Input
                    id="edit-task-title"
                    value={formData.titulo}
                    onChange={e => handleChange("titulo", e.target.value)}
                    placeholder="Digite o título da tarefa"
                    aria-required="true"
                />

                <S.Label htmlFor="edit-task-description">Descrição</S.Label>
                <S.TextAreaWrapper>
                    <S.TextArea
                        id="edit-task-description"
                        value={formData.descricao}
                        onChange={e => handleChange("descricao", e.target.value)}
                        placeholder="Descreva a tarefa..."
                        maxLength={300}
                    />
                    <S.Obs $warning={formData.descricao.length >= 280}>
                        {formData.descricao.length}/300 caracteres
                    </S.Obs>
                </S.TextAreaWrapper>

                <S.Label htmlFor="edit-task-priority">Prioridade *</S.Label>
                <S.Select
                    id="edit-task-priority"
                    value={formData.prioridade}
                    onChange={e => handleChange("prioridade", e.target.value)}
                    aria-required="true"
                >
                    <option value="BAIXA">Baixa</option>
                    <option value="MEDIA">Média</option>
                    <option value="ALTA">Alta</option>
                </S.Select>

                <S.Label htmlFor="edit-task-responsible">Responsável</S.Label>
                <S.Select
                    id="edit-task-responsible"
                    value={formData.responsavelId}
                    onChange={e => handleChange("responsavelId", e.target.value)}
                    placeholder="Nome do responsável"
                >
                    {colaboradores.map((colaborador) => (
                        <option key={colaborador.id} value={colaborador.id}>
                            {colaborador.nomeCompleto}
                        </option>
                    ))}
                </S.Select>

                <S.Label htmlFor="edit-task-deadline">Prazo de Entrega</S.Label>
                <S.DatePickerWrapper>
                    <DatePicker
                        id="edit-task-deadline"
                        selected={formData.prazoEntrega}
                        onChange={date => handleChange("prazoEntrega", date)}
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        showIcon
                        icon={<BiCalendar aria-hidden="true" />}
                        customInput={<S.Input id="edit-task-deadline" readOnly style={{ cursor: "pointer" }} aria-label="Selecionar data de entrega" />}
                    />
                </S.DatePickerWrapper>

                <S.Label htmlFor="edit-task-attachments">Anexos</S.Label>
                <AttachmentUpload
                    id="edit-task-attachments"
                    value={attachments}
                    onFilesChange={setAttachments}
                />

                <S.ButtonGroup>
                    <S.CancelButton onClick={handleClose} aria-label="Cancelar edições">
                        Cancelar
                    </S.CancelButton>
                    <S.CreateButton onClick={handleSubmit} aria-label="Salvar alterações na tarefa">
                        Salvar
                    </S.CreateButton>
                </S.ButtonGroup>

            </S.Modal>
        </S.Overlay>
    );
};

export default ModalEditTask;
