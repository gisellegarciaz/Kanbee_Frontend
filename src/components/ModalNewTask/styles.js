import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
    background: var(--modal-bg);
    color: var(--text-color);
    border-radius: 12px;
    padding: 20px;
    width: 440px;
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 30px var(--shadow-bg);
    display: flex;
    flex-direction: column;
    gap: 5px;

    .react-datepicker-wrapper {
        width: 100%;
    }

@media (max-width: 440px) {
    width: 280px;
    padding: 14px;
    font-size: 15px;
    border-radius: 10px;
}
`;

export const Title = styled.h2`
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
`;

export const Label = styled.label`
    color: var(--text-color);
    font-weight: 500;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.625rem 0.75rem;
    margin-bottom: 10px;
    border-radius: 0.5rem;
    border: 1px solid #dfe3e8;
    outline: none;
    background: var(--bg-color);
    color: var(--text-color);
    font-size: 1rem;
    box-sizing: border-box;

    &:focus {
        border-color: var(--primary-color, #007bff); 
    }
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })`
    height: 80px;
    resize: vertical;
    font-family: inherit;
`;

export const Select = styled(Input).attrs({ as: "select" })`
    cursor: pointer;
    background-color: var(--bg-color);
`;

export const ButtonGroup = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        gap: 12px;
        margin-top: 12px;
    }
`;

const BaseButton = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    min-width: 100px;

    &:hover {
        transform: translateY(-1px);
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 12px 16px;
        font-size: 1rem;
        min-width: auto;
    }
`;

export const CancelButton = styled(BaseButton)`
    background: var(--modal-cancel);
    color: var(--text-color);

    &:hover {
    background: var(--modal-cancel-hover);
    color: #000;
    }
`;

export const CreateButton = styled(BaseButton)`
    background: var(--modal-save);
    color: #fff;

    &:hover {
    background: var(--modal-save-hover);
    }
`;