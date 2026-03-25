import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
    padding: 0;
    flex-grow: 1;
    min-height: 100px;
    overflow-y: auto;
    background-color: transparent; 
    transition: background-color 0.2s ease;
    ${props => props.$isDraggingOver && css`
        background-color: rgba(255, 255, 255, 0.1);
    `}
`;