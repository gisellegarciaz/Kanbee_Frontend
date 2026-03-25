import styled from 'styled-components';

export const Overlay = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    position: fixed;
    z-index: 2000;
    inset: 0;

    background: var(--notification-overlay-bg);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: var(--notification-overlay-shadow);
`;

export const Panel = styled.div`
    width: min(480px, 100vw);
    height: 100vh;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--glass-shadow);
    border-left: 1px solid var(--border-color);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    padding: 30px 24px;
    gap: 16px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;
`;

export const TitleContainer = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
    margin: 0px 10px 0px;
    font-weight: 600;
    color: var(--text-color);
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 4px;
    cursor: pointer;
    color: var(--text-color);
    transition: all 0.2s ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, 0.05);
        transform: scale(1.05);
    }

    html.dark &:hover {
        background: rgba(255, 255, 255, 0.08);
    }
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 4px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const EmptyState = styled.p`
    margin: 0;
    color: var(--subtitle-color);
`;


