import React, { useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { toast } from 'react-toastify';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import api from '../../api';
import {
  LoginContainer,
  LoginCard,
  LoginHeader,
  LogoContainer,
  LogoImage,
  LogoImageDark,
  LoginForm,
  FormGroup,
  FormLabel,
  FormInput,
  LoginButton,
  ForgotPasswordLink,
  BackToLoginLink,
  RecoveryText,
  InputWrapper,
  ToggleVisibilityButton
} from './styles';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const Login = () => {
  const [dadosLogin, setDadosLogin] = useState({ email: '', senha: '' });
  const [verSenha, setVerSenha] = useState(false);
  const [isRecuperando, setIsRecuperando] = useState(false);
  const [emailRecuperacao, setEmailRecuperacao] = useState('');

  const { login } = useAuth();
  const { theme } = useAccessibility();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!dadosLogin.email || !dadosLogin.senha) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    login(dadosLogin.email, dadosLogin.senha);
  };

  const handleRecuperarSenha = async (e) => {
    e.preventDefault();
    if (!emailRecuperacao) {
      toast.error("Por favor, informe seu e-mail.");
      return;
    }
    try {
      const response = await api.post(`/auth/recuperar-senha?email=${emailRecuperacao}`);
      toast.success("Sucesso! " + response.data);
      setIsRecuperando(false);
    } catch (error) {
      toast.error("Erro ao tentar recuperar senha.");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDadosLogin(prev => ({ ...prev, [id]: value }));
  };

  return (
    <LoginContainer theme={theme}>
      <LoginCard theme={theme}>
        <LoginHeader>
          <LogoContainer>
            {theme === 'light' ? <LogoImage /> : <LogoImageDark />}
          </LogoContainer>
        </LoginHeader>

        {!isRecuperando ? (
          <LoginForm onSubmit={handleLoginSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">E-mail / Usuário</FormLabel>
              <FormInput
                theme={theme}
                type="text"
                id="email"
                placeholder="seu@email.com ou seuUsuario"
                value={dadosLogin.email}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="senha">Senha</FormLabel>
              <InputWrapper>
                <FormInput
                  theme={theme}
                  type={verSenha ? "text" : "password"} 
                  id="senha"
                  placeholder="••••••••"
                  value={dadosLogin.senha}
                  onChange={handleInputChange}
                />
                <ToggleVisibilityButton 
                  type="button" 
                  onClick={() => setVerSenha(!verSenha)}
                  tabIndex="-1" 
                >
                  {verSenha ? <IoEyeOffOutline size={22} /> : <IoEyeOutline size={22} />}
                </ToggleVisibilityButton>
              </InputWrapper>
            </FormGroup>

            <LoginButton type="submit">Entrar</LoginButton>

            <ForgotPasswordLink onClick={() => setIsRecuperando(true)}>
              Esqueceu sua senha? Clica aqui que a gente resolve!
            </ForgotPasswordLink>
          </LoginForm>
        ) : (
          <LoginForm onSubmit={handleRecuperarSenha}>
            <FormGroup>
              <FormLabel htmlFor="email-recuperar">Endereço de E-mail</FormLabel>
              <FormInput
                theme={theme}
                type="email"
                id="email-recuperar"
                placeholder="seu@email.com"
                value={emailRecuperacao}
                onChange={(e) => setEmailRecuperacao(e.target.value)}
              />
            </FormGroup>

            <RecoveryText>
              Enviaremos um link de recuperação para o seu e-mail cadastrado.
            </RecoveryText>

            <LoginButton type="submit">Enviar Link</LoginButton>

            <BackToLoginLink onClick={() => setIsRecuperando(false)}>
              Voltar para o Login
            </BackToLoginLink>
          </LoginForm>
        )}
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;