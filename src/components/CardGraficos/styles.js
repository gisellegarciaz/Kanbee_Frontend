import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    border-radius: 40px;
    padding: 20px;
    width: 100%;
    height: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    border: 1px solid transparent;
    background-color: transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--glass-shadow);

    &:hover {
    background-color: rgba(198, 255, 249, 0.1);
    color: var(--text-color);
    }

`;

export const Title = styled.h3`
    margin-bottom: 0px;
    margin-top: 0px;
    color: var(--text-color);
`;

export const NoDataMessage = styled.p`
    color: ${props => props.theme === 'light' ? '#666' : '#ccc'};
    margin-top: 20px;
`;