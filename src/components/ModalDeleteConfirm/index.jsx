import React from 'react';
import * as S from './styles';
import { BiError } from "react-icons/bi";

const ModalDeleteConfirm = ({ isOpen, onClose, onConfirm, taskTitle }) => {
    if (!isOpen) return null;

    return (
        <S.Overlay onClick={onClose}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.Title>
                <BiError size={25}/> Confirmar exclusão
                </S.Title>
                
                <S.Message>
                    Tem certeza que deseja excluir a tarefa "{taskTitle}"?
                </S.Message>
                
                <S.ButtonGroup>
                    <S.CancelButton onClick={onClose}>
                        Cancelar
                    </S.CancelButton>
                    
                    <S.DeleteButton onClick={onConfirm}>
                        Excluir
                    </S.DeleteButton>
                </S.ButtonGroup>
            </S.Container>
        </S.Overlay>
    );
};

export default ModalDeleteConfirm;