import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  background: #1e293b;
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

export const ModalMessage = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  margin: 0 0 24px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: #334155;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #475569;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 24px;
  background: #dc2626; 
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: white; 
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ef4444;
  }
`;