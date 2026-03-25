import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: var(--bg-color);
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid ${props => props.$isUnread ? 'var(--primary-color)' : '#e0e0e0'};
    transition: all 0.2s ease;
    cursor: default;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        transform: translateY(-1px);
    }
`;

export const CardContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
`;

export const Message = styled.p`
    margin: 0;
    color: var(--text-color);
    line-height: 1.5;
    flex: 1;
    font-weight: ${props => props.$isUnread ? '600' : '400'};

    strong {
        font-weight: ${props => props.$isUnread ? '700' : '600'};
    }
`;

export const MarkAsReadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    min-width: 36px;
    height: 36px;

    &:hover {
        background: var(--primary-color);
        opacity: 0.9;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
`;


