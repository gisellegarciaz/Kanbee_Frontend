import styled, { keyframes } from 'styled-components';
import logoClaro from '../../assets/Logos/Logo_TareFiz_Light.png';
import logoEscuro from '../../assets/Logos/Logo_TareFiz_Dark.png';

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

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 2.5rem 3rem;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: var(--glass-fill), var(--glass-border);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border: 1px solid var(--border-color);
  box-shadow: var(--column-glass-shadow);

  animation: ${animacaoAparecer} 0.5s ease-out;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(14, 165, 233, 0.25);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 440px) {
    padding: 1.5rem 1.25rem;
    border-radius: 18px;
  }
`;


export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 440px) {
    margin-bottom: 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const LogoImage = styled.span`
  display: block;

  width: min(15rem, 80vw);
  aspect-ratio: 2.8;

  background-image: url(${logoClaro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transition: background-image 0.3s ease-in-out;

  @media (max-width: 440px) {
    width: min(12rem, 70vw);
  }
`;

export const LogoImageDark = styled.span`
  display: block;
  width: min(15rem, 80vw);
  aspect-ratio: 2.8;

  background-image: url(${logoEscuro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transition: background-image 0.3s ease-in-out;

  @media (max-width: 440px) {
    width: min(12rem, 70vw);
  }
`;

export const LoginSubtitle = styled.h2`
  font-size: 1rem;
  line-height: 1.4;
  color: var(--text-color);
  margin: 0;
  font-weight: 400;

  @media (max-width: 440px) {
    font-size: 0.95rem;
  }
`;

export const LoginTabs = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-bottom: 2.5rem;

  border-bottom: 2px solid ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};

  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 440px) {
    margin-bottom: 1.5rem;
  }
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 14px 20px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: ${({ $active }) => $active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid ${({ $active }) => $active ? 'var(--primary-color)' : 'transparent'};
  margin-bottom: -2px;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 15px;
  }

  @media (max-width: 440px) {
    padding: 10px 12px;
    font-size: 14px;
    flex: unset;
    wwhite-space: nowrap;
  }
`;


export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 80%;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 35vw;
  }

  @media (max-width: 440px) {
    gap: 1.25rem;
    width: 70vw;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 440px) {
    gap: 0.5rem;
  }
`;

export const FormLabel = styled.label`
  font-weight: 400;
  color: var(--text-color);
  line-height: 1.3;

  @media (max-width: 440px) {
    font-size: 0.75rem;
  }
`;

export const FormInput = styled.input`
  padding: 16px 18px;
  border: 2px solid ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
  background: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'};
  color: var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:focus {
    border-color: var(--primary-color);
    background: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.95)'};
    box-shadow: 0 0 0 4px ${({ theme }) => theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(14, 165, 233, 0.1)'};
  }

  &::placeholder {
    color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)'};
  }

  @media (max-width: 768px) {
    padding: 14px 16px;
    font-size: 15px;
  }

  @media (max-width: 440px) {
    padding: 12px 14px;
    font-size: 14px;
    border-radius: 10px;
  }
`;

export const LoginButton = styled.button`
  padding: 18px;
  background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(8, 145, 178, 0.4);
  margin-top: 8px;
  margin-bottom: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(8, 145, 178, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }

  @media (max-width: 440px) {
    padding: 14px;
    font-size: 15px;
    border-radius: 10px;
  }
`;

export const BackToLoginLink = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) =>
      theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : '#0c8599'};
    text-decoration: underline;
  }

  @media (max-width: 440px) {
    font-size: 0.75rem;
    padding: 8px;
  }
`;

export const RecoveryText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0 0 10px 0;
  line-height: 1.5;

  @media (max-width: 440px) {
    font-size: 0.75rem;
  }
`;