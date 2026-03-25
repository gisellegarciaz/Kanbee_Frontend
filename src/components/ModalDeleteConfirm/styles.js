import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const Container = styled.div`
    background: var(--modal-bg);
    border: 1px solid var(--border-color);
    padding: 24px;
    border-radius: 20px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 20px 'var(--border-color)';

    @media (max-width: 768px) {
        min-width: 50%;
        max-width: 90%; 
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 0 12px 0;
    color: var(--text-color);
    font-weight: 700;
`;

export const Message = styled.p`
    color: var(--text-color);
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 1.5;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`;

const BaseButton = styled.button`
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    transition: filter 0.2s;

    &:hover {
        transform: translateY(-1px);
    }
`;

export const CancelButton = styled(BaseButton)`
    background: var(--modal-cancel);
    color: var(--text-color);
    font-weight: 600;
    

    &:hover {
        background: var(--modal-cancel-hover);
        color: #000;
    }
`;

export const DeleteButton = styled(BaseButton)`
    background: var(--modal-delete);
    color: white;
    font-weight: 600;

    &:hover {
        background: var(--modal-delete-hover);
    }
`;