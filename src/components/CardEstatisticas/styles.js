import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 12px;
    min-width: 100px;
    widht: 200px;
    hight: 200px;
    border-radius: 40px;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.2s;
    justify-content: center;

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border: 1px solid transparent;
    background-color: transparent;

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--glass-shadow);

    &:hover {
    background-color: rgba(203, 240, 223, 0.1);
    color: var(--text-color);
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1e293b;
`;

export const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    `;

export const IconWrapper = styled.div`
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 30px;
        height: 30px;
    }
`;

export const Value = styled.strong`
    font-size: 2.5rem;
    font-weight: 700;
    color: var (--text-color);
    line-height: 1;
    margin-top: 8px;
`;

export const Description = styled.span`
    font-size: 1rem;
    color: var(--subtitle-color);
`;