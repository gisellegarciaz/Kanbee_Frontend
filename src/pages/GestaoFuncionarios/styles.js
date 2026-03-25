import styled from 'styled-components';
import logoClara from '../../assets/Logos/Logo_TareFiz_Light.png';
import logoEscura from '../../assets/Logos/Logo_TareFiz_Dark.png';
import fundoEscuro from '../../assets/Backgrunds/bgTarefizDark.webp';
import fundoClaro from '../../assets/Backgrunds/bgTarefizLight.webp';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: transparent;
    padding-left: 100px;
    padding-right: 100px;
    margin-bottom: 50px;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: ${({ theme }) => theme === 'dark' ? `url(${fundoEscuro})` : `url(${fundoClaro})`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
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
    background-image: url(${logoClara});
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
    background-image: url(${logoEscura});
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
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 20px;
    padding: 0;
    justify-content: center;
    backdrop-filter: blur(5px);
    background-color: transparent;
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid transparent;
    background-clip: padding-box;
    background-origin: padding-box, border-box;
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

export const ContentGrid = styled.div`
    display: grid;
    gap: 24px;
    width: 100%;
`;

export const Section = styled.div`
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 24px;
    padding: 32px;
    border: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-image: ${({ theme }) => theme === 'dark' 
            ? 'linear-gradient(135deg, rgba(0, 20, 48, 0.2),  rgba(10, 30, 59, 0.1)), linear-gradient(135deg, rgba(148, 163, 184, 0.3), rgba(100, 116, 139, 0.2))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(203, 213, 224, 0.5)), linear-gradient(135deg, rgba(186, 230, 253, 0.4), rgba(125, 211, 252, 0.3))'};
        transform: translateY(-1px);
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ $withContent }) => $withContent ? '24px' : '0'};
    flex-wrap: wrap;
    gap: 16px;
`;

export const SectionTitleGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SectionIcon = styled.span`
    font-size: 28px;
`;

export const SectionTitleText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionTitle = styled.h2`
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
`;

export const SectionSubtitle = styled.p`
    color: var(--subtitle-color);
    margin: 4px 0 0 0;
`;

export const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    span {
        font-size: 18px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 6px rgba(25, 25, 25, 0.4);
    }

    &:active {
        transform: translateY(0);
    }

    @media screen and (max-width: 600px) {
        margin-left: 10px;
        padding: 10px 15px;
        font-size: 14px;
    }
`;

export const EmployeeList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: calc(100vh - 300px);
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(241, 245, 249, 0.1);
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(148, 163, 184, 0.3);
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.5);
    }
`;

export const EmployeeCard = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid transparent;
    background: var(--card-bg);    
    transition: all 0.2s ease;

    &:hover {
        transform: translateX(8px);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const EmployeeAvatar = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(8, 145, 178, 0.3);
`;

export const EmployeeInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

export const EmployeeName = styled.h3`
    font-weight: 600;
    color: var(--text-color);
    margin: 0 0 4px 0;
`;

export const EmployeeEmail = styled.p`
    color: var(--text-color);
    margin: 0 0 4px 0;
`;

export const EmployeeRole = styled.p`
    color: var(--text-color);
    margin: 0;
    font-weight: 500;
`;

export const EmployeeActions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-shrink: 0;

    @media screen and (max-width: 600px) {
        width: 100%;
        justify-content: flex-end;
    }
`;

export const IconButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: none;
    padding: 0;
    background: ${({ $delete }) => $delete 
        ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' 
        : 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)'};
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
    box-shadow: ${({ $delete }) => $delete
        ? '0 4px 12px rgba(239, 68, 68, 0.3)'
        : '0 4px 12px rgba(8, 145, 178, 0.3)'};

    &:hover {
        transform: scale(1.1);
        box-shadow: ${({ $delete }) => $delete
            ? '0 6px 16px rgba(239, 68, 68, 0.4)'
            : '0 6px 16px rgba(8, 145, 178, 0.4)'};
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: var(--subtitle-color);
    font-size: 1rem;
`;