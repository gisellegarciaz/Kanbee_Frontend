import styled from 'styled-components';
import fundoLight404 from '../../assets/Backgrunds/bgTarefizLight404.webp';
import fundoDark404 from '../../assets/Backgrunds/bgTarefizDark404.webp';

export const Container = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: var(--bg-color);
    transition: background-color 0.3s, color 0.3s;
    overflow: auto;
    box-sizing: border-box;
    
    background-image: ${props => props.theme === "light" ? `url(${fundoLight404})` : `url(${fundoDark404})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

export const Content = styled.div`
    text-align: center;
    max-width: 700px;
    width: 100%;
    margin: auto;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--glass-shadow);

    @media (min-width: 1200px) {
        max-width: 800px;
        padding: 4rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
        border-radius: 16px;
    }

    @media (max-width: 480px) {
        padding: 1.5rem 1rem;
    }
`;

export const Container404 = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
`;

export const Image404 = styled.img`
    max-width: 100%;
    height: auto;
    width: 350px; 
    
    animation: float 5s ease-in-out infinite;

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-7px);
        }
    }

    @media (max-width: 768px) {
        width: 250px;
    }

    @media (max-width: 480px) {
        width: 180px;
    }
`;

export const ErrorTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    color: var(--text-color);

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 1.2rem;
    color: var(--text-color);
    margin: 1rem 0 2rem 0;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin: 0.75rem 0 1.5rem 0;
    }

    @media (max-width: 480px) { 
        font-size: 0.9rem;
        margin: 0.5rem 0 1.5rem 0;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.75rem;
    }
`;

const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    min-width: 160px;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 3px solid var(--primary-color);
        outline-offset: 2px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.875rem 1.25rem;
        min-width: auto;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background: var(--primary-color);
    color: #fff;

    &:hover {
        opacity: 0.9;
    }
`;

export const SecondaryButton = styled(BaseButton)`
    border: 1px solid var(--border-color);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    
    background-image: var(--botao-fill), var(--botao-border);
    box-shadow: var(--botao-shadow);

    color: var(--text-color);
    border: 1px solid var(--border-color);


    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    html.dark &:hover {
        background: rgba(255, 255, 255, 0.4);
    }
`;