import styled from "styled-components";
import fundoDark from '../../assets/Backgrunds/kanbeeIDVisual-05.png';
import fundoLight from '../../assets/Backgrunds/kanbeeIDVisual-02.png';

export const InputContainer = styled.div`
    min-height: 80vh;
    min-width: 70%;
    background-color: transparent;
    display: flex;
    align-items: center;

    background-image: ${props => props.theme === "light" ? `url(${fundoLight})` : `url(${fundoDark})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    
    // box-shadow: ${props => props.theme === "light" ? 'inset 0 0 0 2000px rgba(255, 255, 255, 0.3)' : 'inset 0 0 0 2000px rgba(14, 14, 14, 0.5)'};
`;