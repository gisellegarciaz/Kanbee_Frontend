import styled from 'styled-components';
import logoDefault from '../../assets/Logos/Logo_TareFiz_Light.png'
import logoDark from '../../assets/Logos/Logo_TareFiz_Dark.png'

export const GlassHeader = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    position: fixed;
    top: 16px;
    margin-left: 10%;
    margin-right: 10%;
    z-index: 1000;
    width: 80%;
    height: 5rem;
    border-radius: 1rem;
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--column-glass-shadow);

    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1px);
    
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid #ebebebff;
    
    align-items: center;
    transition: background 0.3s ease, border-color 0.3s ease;

    @media (max-width: 1082px) {
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        height: 4.5rem;
    }

    @media (max-width: 768px) {
        margin-left: 2%;
        margin-right: 2%;
        width: 96%;
        padding-right: 1rem;
        padding-left: 1rem;
        height: 4rem;
        top: 8px;
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
    margin-left: 5%;

    transition: background-image 0.3s ease-in-out;

    @media (max-width: 992px) {
        width: 7rem;
        margin-left: 0.5rem;
    }
`;

export const LogoImageDark = styled.span`
    display: inline-block;
    width: 10rem;
    aspect-ratio: 2.8;

    background-image: url(${logoDark});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 5%;

    transition: background-image 0.3s ease-in-out;

    @media (max-width: 992px) {
        width: 7rem;
        margin-left: 0.5rem;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;

    cursor: pointer;

    &:hover ${LogoImage} {
        transform: scale(1.05);
    }

    @media (max-width: 992px) {
        align-items: flex-start;
    }
`;

export const BrandTitle = styled.h1`
    font-family: 'Instrument Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
    line-height: 1.1;
`;

export const UserRoleBadge = styled.span`
    font-size: 0.8rem;
    color: var(--text-color);
    opacity: 0.7;
    font-weight: 500;

    @media (max-width: 992px) {
        font-size: 0.65rem;
    }
`;

export const ActionsContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    background-color: ${props => props.$variant === 'primary' ? '#0d6efd' : 'transparent'};
    color: ${props => props.$variant === 'primary' ? '#fff' : 'var(--text-color)'};
    border: ${props => props.$variant === 'primary' ? '1px solid #0d6efd' : '1px solid transparent'};

    &.outline {
        border: 1px solid var(--border-color);
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
        background-color: rgba(158, 171, 227, 0.4);
        color: black;
    }
    
    html.dark &:hover {
        background-color: rgba(122, 137, 204, 0.6);
        color: #151515ff;
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 992px) {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
`;

export const HamburgerButton = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: all 0.2s ease-in-out;
    z-index: 1001;

    &:hover {
        background-color: rgba(0,0,0,0.05);
        transform: scale(1.05);
    }

    html.dark &:hover {
        background-color: rgba(255,255,255,0.1);
    }

    @media (max-width: 992px) {
        display: flex;
    }
`;

export const MobileMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 999;
    animation: fadeIn 0.2s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    max-width: 85vw;
    height: 100vh;
    background-color: transparent;

    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--column-glass-shadow);

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(1px);
    
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid #ebebebff;
    
    z-index: 1000;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    animation: ${props => props.$isOpen ? 'slideIn' : 'none'} 0.3s ease-in-out;

    @media (max-width: 480px) {
        width: 100vw;
        max-width: 100vw;
    }
`;

export const MobileMenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const MobileMenuTitle = styled.h2`
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-color);
`;

export const SideButtonsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MobileMenuCloseButton = styled(HamburgerButton)`
    background: transparent;
    border: none;

    background-color: transparent;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--botao-shadow);

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
        background-color: rgba(255, 255, 255, 0.9);
        color: var(--primary-color);
    }
    
    html.dark &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
        background-color: rgba(181, 223, 255, 0.7);
        color: black;
    }
`;

export const MobileMenuButtonCreate = styled(MenuButton)`
    width: 100%;
    justify-content: center;
    padding: 0.75rem;

    background-color: ${props => props.$variant === 'primary' ? '#0d6efd' : 'transparent'};
    color: ${props => props.$variant === 'primary' ? '#fff' : 'var(--text-color)'};
    border: ${props => props.$variant === 'primary' ? '1px solid #0d6efd' : '1px solid transparent'};

    &.outline {
        border: 1px solid var(--border-color);
    }

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
        background-color: rgba(0, 99, 174, 0.7);
        color: white;
    }
    
    html.dark &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        
        background-color: rgba(181, 223, 255, 0.7);
        color: black;
    }
`;

export const MobileMenuButton = styled(MenuButton)`
    width: 100%;
    justify-content: center;
    padding: 0.75rem;

    background-color: transparent;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--botao-shadow);

    color: var(--text-color);

    html.dark &.outline {
        box-shadow: 0 4px 2px rgba(0,0,0,0.1);
        border: 1px solid rgba(0, 0, 0, 0.47);
        color: white;
    }
`;

export const MobileMenuButtonSair = styled(MenuButton)`
    width: 100%;
    justify-content: center;
    padding: 0.75rem;

    background-color: transparent;
    background-image: var(--glass-fill), var(--glass-border);
    box-shadow: var(--botao-shadow);
    color: var(--text-color);

    &:hover {
        color: rgba(73, 9, 9, 1);
        background-color: rgba(202, 164, 164, 0.8);
        border: 1px solid rgba(160, 0, 0, 0.9);

    html.dark &:hover {
        background-color: rgba(221, 37, 37, 0.8);
        color: white;
    }
`;