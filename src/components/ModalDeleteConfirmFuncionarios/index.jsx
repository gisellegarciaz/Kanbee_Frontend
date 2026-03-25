import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalMessage,
  ModalFooter,
  CancelButton,
  DeleteButton
} from './styles';

const ModalDeleteConfirmFuncionarios = ({ isOpen, onClose, onConfirm, funcionarioNome }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Tem certeza que deseja excluir {funcionarioNome}?</ModalTitle>
        <ModalMessage>Esta ação não pode ser desfeita.</ModalMessage>
        
        <ModalFooter>
          <CancelButton onClick={onClose}>
            Cancelar
          </CancelButton>
          <DeleteButton onClick={onConfirm}>
            Excluir
          </DeleteButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalDeleteConfirmFuncionarios;