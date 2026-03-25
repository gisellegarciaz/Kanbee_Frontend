import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { BiSun, BiMoon } from "react-icons/bi"; 

import { 
    FloatingContainer, 
    ThemeSwitchWrapper, 
    Slider,
    IconsContainer,
    IconWrapper,
    FontButtonsGroup, 
    FontButton 
} from './styles';

const AccessibilityWidget = () => {
    const { toggleTheme, theme, increaseFont, decreaseFont } = useAccessibility();

    const isDark = theme === 'dark';

    return (
        <FloatingContainer role="complementary" aria-label="Ferramentas de Acessibilidade">
            
            <ThemeSwitchWrapper>
                <input 
                    type="checkbox" 
                    id="theme-toggle"
                    checked={isDark} 
                    onChange={toggleTheme} 
                    aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
                />
                
                <Slider aria-hidden="true" />

                <IconsContainer aria-hidden="true">
                    <IconWrapper className="sun" $isDark={isDark}>
                        <BiSun fontSize={28} />
                    </IconWrapper>

                    <IconWrapper className="moon" $isDark={isDark}>
                        <BiMoon fontSize={28} />
                    </IconWrapper>
                </IconsContainer>

            </ThemeSwitchWrapper>


            <FontButtonsGroup aria-label="Controle de tamanho da fonte">
                <FontButton 
                    style={{fontSize:20}} 
                    onClick={increaseFont} 
                    title="Aumentar Fonte"
                    aria-label="Aumentar tamanho da fonte"
                >
                    A+
                </FontButton>
                <FontButton 
                    style={{fontSize:20}} 
                    onClick={decreaseFont} 
                    title="Diminuir Fonte"
                    aria-label="Diminuir tamanho da fonte"
                >
                    A-
                </FontButton>
            </FontButtonsGroup>

        </FloatingContainer>
    );
};

export default AccessibilityWidget;