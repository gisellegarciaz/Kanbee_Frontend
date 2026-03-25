import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--shadow-bg);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 32px 5px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(text-color);
  margin: 0 0 6px 0;
`;

export const ModalSubtitle = styled.p`
  color: var(--subtitle-color);
  margin: 0;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid 'white';
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 1;
  padding: 0;

  background: var(--modal-cancel);
  color: var(--text-color);

  &:hover {
  background: var(--modal-cancel-hover);
  color: #000;
  }
`;

export const ModalContent = styled.div`
  padding: 32px;
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const AvatarCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #aecee1ff 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const AvatarPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--modal-bg);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;

  span {
    font-size: 16px;
  }

  &:hover {
    background: var(--modal-save-hover);
    color: #000;
    border: 1px solid #909090ff;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(text-color);
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  color: var(--text-color);
  background: var(--input-color);
  transition: all 0.2s ease;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #7d7e80ff;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  color: var(--text-color);
  background: var(--input-color);
  transition: all 0.2s ease;
  font-family: inherit;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background-color: white;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const CancelButton = styled.button`
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--modal-cancel);
  color: var(--text-color);

  &:hover {
  background: var(--modal-cancel-hover);
  transform: translateY(-1px);
  color: #000;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--modal-save);
  color: #fff;

    &:hover {
    background: var(--modal-save-hover);
    color: #000;
    transform: translateY(-1px);
    box-shadow: 0 1px 1px rgba(64, 69, 75, 0.4);
    }
`;