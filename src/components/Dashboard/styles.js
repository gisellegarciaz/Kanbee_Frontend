import styled, { keyframes } from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: calc(100vh - 100px);
    width: fit-content;
    min-width: 100vw;
    background-color: transparent;
    align-self:center;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 60px;
    padding-top: 20px;
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: calc(100vh - 100px);
    width: fit-content;
    min-width: 100vw;
    background-color: transparent;
    align-self: center;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 60px;
    padding-top: 60px;
    color: var(--text-color);
`;

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #0891b2;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
