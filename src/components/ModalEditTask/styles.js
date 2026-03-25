import styled from "styled-components";

export const Overlay = styled.div`
    display: flex;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
    padding: 20px; 
    z-index: 1000;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        padding: 10px;
        align-items: center;
    }

    @media (max-width: 480px) {
        padding: 0;
        padding-top: 4vh;
        align-items: flex-start;
    }
`;

export const Modal = styled.div`
    background: var(--card-bg);
    color: var(--text-color);
    border-radius: 20px;
    padding: 24px;
    width: 530px;
    max-width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0px -1px 3px var(--shadow-color);
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: auto;

    @media (max-width: 768px) {
        width: 90%;
        max-width: 500px;
        padding: 20px;
        border-radius: 16px;
        max-height: 85vh;
    }

    @media (max-width: 480px) {
        width: 85vw;
        padding: 20px 16px;
        max-height: 90vh;
        margin: 0;
    }
`;

export const Title = styled.h2`
    margin: 0;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.35rem;
    }

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

export const Label = styled.label`
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 1px;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 0.75rem;
    margin-bottom: 11px;
    border-radius: 0.5rem;
    border: 1px solid var(--input-color);
    outline: none;
    background: var(--bg-color);
    color: var(--text-color);
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &:focus {
        border-color: var(--primary-color, #007bff); 
        box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        font-size: 16px; /* Evita zoom no iOS */
    }
`;

export const TextAreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })`
    min-height: 80px;
    resize: vertical;
    font-family: inherit;

    @media (max-width: 480px) {
        min-height: 5vh;
    }
`;

export const Obs = styled.span`
    font-size: 0.9rem;
    align-self: flex-end;
    color: ${({ $warning }) => ($warning ? '#ff6363ff' : 'var(--subtitle-color)')};
`;

export const Select = styled(Input).attrs({ as: "select" })`
    cursor: pointer;
    background-color: var(--bg-color);
    appearance: none;

    @media (max-width: 480px) {
        font-size: 16px;
    }
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

export const DatePickerWrapper = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container {
        width: 100%;
    }

    @media (max-width: 480px) {
        .react-datepicker {
            font-size: 14px;
        }

        .react-datepicker__header {
            padding: 8px 0;
        }

        .react-datepicker__day {
            width: 32px;
            line-height: 32px;
            margin: 2px;
        }
    }
`;