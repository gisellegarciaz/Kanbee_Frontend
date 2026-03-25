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
  LoginSubtitle,
  LoginTabs,
  TabButton,
  LoginForm,
  FormGroup,
  FormLabel,
  FormInput,
  LoginButton,
  BackToLoginLink,
  RecoveryText
} from './styles';

const Login = () => {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: ''
  });
  const [abaAtiva, setAbaAtiva] = useState('login');
  const { login } = useAuth();
  const { theme } = useAccessibility();
  const [emailRecuperacao, setEmailRecuperacao] = useState();

  const handleFormSubmit = (evento) => {
    evento.preventDefault();

    if (abaAtiva === 'login') {
      if (!dadosLogin.email || !dadosLogin.senha) {
        toast.error('Por favor, preencha todos os campos');
        return;
      }
      login(dadosLogin.email, dadosLogin.senha);
    } else {
      if (!dadosLogin.email) {
        toast.error('Por favor, informe seu email');
        return;
      }
      toast.info('Um email de recuperação será enviado para: ' + dadosLogin.email);
      setAbaAtiva('login');
    }
  };

  const handleInputChange = (evento) => {
    const { id, value } = evento.target;
    setDadosLogin(prev => ({
      ...prev,
      [id === 'email' ? 'email' : id === 'password' ? 'senha' : id]: value
    }));
  };

  const handleRecuperarSenha = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post(`/auth/recuperar-senha?email=${emailRecuperacao}`);

        toast.success("Sucesso! " + response.data);
        setEmailRecuperacao();
        
    } catch (error) {
        console.error("Erro ao recuperar senha", error);
        toast.error("Erro ao tentar recuperar senha.");
    }
  }

  const alternarAba = (novaAba) => {
    setAbaAtiva(novaAba);
  };

  return (
    <LoginContainer theme={theme} role="main" id="login-page">
      <LoginCard theme={theme}>
        <LoginHeader role="banner">
          <LogoContainer>
            {theme === 'light'
              ? <LogoImage aria-label="Logo TareFiz" />
              : <LogoImageDark aria-label="Logo TareFiz" />}
          </LogoContainer>
          <LoginSubtitle>
            Sistema de Gerenciamento de Tarefas
          </LoginSubtitle>
        </LoginHeader>

        <LoginTabs theme={theme} role="tablist" aria-label="Opções de acesso">
          <TabButton
            theme={theme}
            $active={abaAtiva === 'login'}
            onClick={() => alternarAba('login')}
            type="button"
            role="tab"
            aria-selected={abaAtiva === 'login'}
            aria-controls="panel-login"
            id="tab-login"
          >
            Login
          </TabButton>
          <TabButton
            theme={theme}
            $active={abaAtiva === 'recuperar'}
            onClick={() => alternarAba('recuperar')}
            type="button"
            role="tab"
            aria-selected={abaAtiva === 'recuperar'}
            aria-controls="panel-recuperar"
            id="tab-recuperar"
          >
            Recuperar Senha
          </TabButton>
        </LoginTabs>

        {abaAtiva === 'login' ? (
          <LoginForm 
            id="panel-login" 
            role="tabpanel" 
            aria-labelledby="tab-login" 
            onSubmit={handleFormSubmit} 
            aria-label="Formulário de acesso ao sistema"
          >
            <FormGroup>
              <FormLabel htmlFor="email">
                Email ou CPF
              </FormLabel>
              <FormInput
                theme={theme}
                type="text"
                id="email"
                placeholder="seu@email.com ou 000.000.000-00"
                value={dadosLogin.email}
                onChange={handleInputChange}
                aria-required="true"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">
                Senha de Acesso
              </FormLabel>
              <FormInput
                theme={theme}
                type="password"
                id="password"
                placeholder="••••••••"
                value={dadosLogin.senha}
                onChange={handleInputChange}
                aria-required="true"
              />
            </FormGroup>

            <LoginButton
              type="submit"
              aria-label="Entrar no sistema"
            >
              Entrar
            </LoginButton>
          </LoginForm>
        ) : (
          <LoginForm 
            id="panel-recuperar" 
            role="tabpanel" 
            aria-labelledby="tab-recuperar" 
            onSubmit={handleRecuperarSenha} 
            aria-label="Formulário para recuperar acesso"
          >
            <FormGroup>
              <FormLabel htmlFor="email-recuperar">
                Endereço de Email
              </FormLabel>
              <FormInput
                theme={theme}
                type="email"
                id="email-recuperar"
                placeholder="seu@email.com"
                value={emailRecuperacao}
                onChange={(e) => setEmailRecuperacao(e.target.value)}
                aria-required="true"
              />
            </FormGroup>

            <RecoveryText>
              Enviaremos um link de recuperação para o seu email cadastrado.
            </RecoveryText>

            <LoginButton
              type="submit"
              aria-label="Solicitar link de recuperação"
            >
              Enviar Link de Recuperação
            </LoginButton>

            <BackToLoginLink
              onClick={() => alternarAba('login')}
              aria-label="Voltar para a tela de login"
              role="button"
              tabIndex="0"
              onKeyPress={(e) => { if (e.key === 'Enter') alternarAba('login'); }}
            >
              Voltar para o Login
            </BackToLoginLink>
          </LoginForm>
        )}
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;