import styled, { keyframes } from 'styled-components';
import logoDefault from '../../assets/Logos/Logo_TareFiz_Light.png';
import logoDark from '../../assets/Logos/Logo_TareFiz_Dark.png';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100vw;
    min-height: 100vh;
    background-color: transparent;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1024px) {
        padding: 20px 16px;
        margin: 0;
        margin-bottom: 10px;
    }

    @media (max-width: 440px) {
        padding: 20px 16px;
        margin: 0;
        margin-bottom: 10px;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    padding-top: 20px;
    justify-content: center;

    img {
        height: 50px;
    }             
`;

export const LogoImage = styled.span`
    display: inline-block;
    width: 10rem;
    aspect-ratio: 2.8;

    background-image: url(${logoDefault});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 2rem;

    transition: background-image 0.3s ease-in-out;
`;

export const LogoImageDark = styled.span`
    display: inline-block;
    width: 10rem;
    aspect-ratio: 2.8;

    background-image: url(${logoDark});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 2rem;

    transition: background-image 0.3s ease-in-out;
`;

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 0;
    justify-content: center;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 20px;

    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(20px);

    border: 0.5px solid transparent;
    
    background-clip: padding-box;
    background-origin: padding-box, border-box;
    background-color: transparent;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--botao-shadow);

    &:hover {
    background-color: #3d82a4ff;
    color: var(--text-color);
    }
`;

export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--text-color); 
    margin: 0;
    line-height: 1.2;
`;

export const Subtitle = styled.p`
    font-size: 0.9rem;
    color: var(--subtitle-color);
    margin: 4px 0 0 0;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 24px;
    width: 100%;
`;

export const CardGraphContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 24px;
    width: 100%;
    margin-top: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
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
