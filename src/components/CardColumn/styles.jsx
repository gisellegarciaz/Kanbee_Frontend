import styled from 'styled-components';

export const CardColumnWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0.5rem;
    width: clamp(280px, 20vw, 350px);
    min-width: 280px;
    height: fit-content;
    min-height: 50vh;
    transform-origin: center top;
    transition: transform 0.2s ease;
    -webkit-transform-origin: center top;
    -moz-transform-origin: center top;
    -ms-transform-origin: center top;
    -o-transform-origin: center top;
`;

export const ColumnContainer = styled.div`
    display: flex; 
    flex-direction: column;
    max-height: 100%;
    height: fit-content;
    min-height: 50vh;
    flex-grow: 1;
    overflow-y: auto; 
    padding: 0.625rem;
    border-radius: 15px;
    transform-origin: center top;

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    background-image: var(--column-glass-fill), var(--column-glass-border);
    box-shadow: var(--column-glass-shadow);
`;

export const Header = styled.div`
    padding: 0.625rem 0.625rem 0 0.625rem;
    display: flex;
    gap: 0.5rem;
    justify-content: start;
    align-items: center;
    margin-bottom: 0.625rem;
`;

export const Title = styled.h2`
    color: var(--text-color);
    font-weight: bold;
    margin: 0;
    font-size: 1.125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left center;
`;

export const TaskCountBadge = styled.span`
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--text-color);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.25rem 0.25rem;
    border-radius: 12px;
    min-width: 28px;
    text-align: center;
    transform-origin: right center;
`;