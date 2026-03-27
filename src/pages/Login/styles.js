import styled, { keyframes, css } from 'styled-components';
import logoClaro from '../../assets/Logos/logoDark@2x.png';
import logoEscuro from '../../assets/Logos/logoDark@2x.png';

const animacaoAparecer = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) { padding: 2rem; }
  @media (min-width: 1024px) { padding: 3rem; }
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Efeito Glassmorphism da imagem */
  background: ${props => props.theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(255, 255, 255, 0.3)'};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);

  animation: ${animacaoAparecer} 0.5s ease-out;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(255, 152, 0, 0.15);
  }

  @media (max-width: 440px) {
    padding: 2rem 1.5rem;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const LogoImage = styled.span`
  display: block;
  width: min(15rem, 70vw);
  aspect-ratio: 2.8;
  background-image: url(${logoClaro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LogoImageDark = styled.span`
  display: block;
  width: min(15rem, 70vw);
  aspect-ratio: 2.8;
  background-image: url(${logoEscuro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginSubtitle = styled.h2`
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
  font-weight: 400;
  margin: 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  color: var(--text-color);
  padding-left: 4px;
`;

export const FormInput = styled.input`
  padding: 14px 16px;
  ${props => props.type === 'password' && css`
    padding-right: 48px;
  `}
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 12px;
  font-size: 15px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.6)'};
  color: var(--text-color);
  outline: none;
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    border-color: #ff9800;
    background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : '#fff'};
  }
`;

export const ForgotPasswordLink = styled.span`
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.7;
  cursor: pointer;
  text-align: center;
  margin-top: -8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  padding: 16px;
  background: #ff9800; /* Laranja da imagem */
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);

  &:hover {
    background: #e68a00;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BackToLoginLink = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.7;
  margin-top: 10px;

  &:hover { opacity: 1; }
`;

export const RecoveryText = styled.p`
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
  text-align: center;
  line-height: 1.4;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ToggleVisibilityButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  padding: 8px;
  color: var(--text-color);
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;