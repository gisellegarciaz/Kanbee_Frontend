import styled from 'styled-components';

export const FloatingContainer = styled.div`
    position: fixed;
    right: 10px;
    top: 69%;
    transform: translateY(-50%);
    z-index: 1000;
    align-items: center;
    
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ThemeSwitchWrapper = styled.label`
    position: relative;
    display: block;
    align-items: 'center';
    justify-content: 'center';
    width: 48px;
    height: 96px;
    background: var(--header-bg, rgba(255, 255, 255, 0.25));

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    border-radius: 50px;

    
    background-origin: border-box;
    background-clip: padding-box, border-box;
    backdrop-filter: blur(5px);

    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid #ebebebff;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);

    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;

export const Slider = styled.span`
    position: absolute;
    align-items: center;
    left: 4px;
    width: 40px;
    height: 40px;
    background-color: #487ee4ff;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    z-index: 1;
    
    top: 6px; 
    transform: translateY(0);

    input:checked + & {
        transform: translateY(46px);

    }
`;

export const IconsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: space-between;
    padding-top: 0;
    z-index: 2;
    pointer-events: none;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.3s ease;
    height: 30px;

    &.sun {
        color: ${props => props.$isDark ? '#fff' : '#fff'};
    }

    &.moon {
        color: ${props => props.$isDark ? '#fff' : '#000'};
    }
`;

export const FontButtonsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FontButton = styled.button`
    width: 48px;
    height: 48px;
    background: var(--header-bg, rgba(255, 255, 255, 0.25)); 

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: var(--text-color);

    border: 1.5px solid transparent;
    border-radius: 50%;

    
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid #ebebebff;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);

    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
        background-color: var(--primary-color);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`;