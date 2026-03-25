import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle, BiHome, BiArrowBack } from 'react-icons/bi';
import { useAccessibility } from "../../contexts/AccessibilityContext";
import * as S from './styles';
import svg404 from '../../assets/404.svg'; 

const NotFound = () => {
    const navigate = useNavigate();
    const { theme } = useAccessibility();

    return (
        <S.Container theme={(theme)} aria-labelledby="error-title">
            <S.Content>
                <S.Container404>                    
                    <S.Image404 
                        src={svg404} 
                        alt="Ilustração do erro 404: Página não encontrada" 
                    />
                </S.Container404>
                
                <S.ErrorTitle id="error-title">Página não encontrada</S.ErrorTitle>
                
                <S.ErrorMessage>
                    Ops! A página que você está procurando não existe ou foi movida.
                </S.ErrorMessage>
                
                <S.ButtonGroup>
                    <S.PrimaryButton onClick={() => navigate('/home')}>
                        <BiHome size={20} aria-hidden="true"/>
                        Ir para Home
                    </S.PrimaryButton>
                    
                    <S.SecondaryButton
                        onClick={() => navigate(-1)}
                        aria-label="Voltar para a página anterior"
                    >
                        <BiArrowBack size={20} aria-hidden="true" />
                        Voltar
                    </S.SecondaryButton>
                </S.ButtonGroup>
            </S.Content>
        </S.Container>
    );
};

export default NotFound;

