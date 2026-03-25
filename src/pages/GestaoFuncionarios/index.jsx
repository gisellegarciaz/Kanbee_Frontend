import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { useAccessibility } from '../../contexts/AccessibilityContext';
import ModalFuncionarios from '../../components/ModalFuncionarios';
import ModalDeleteConfirmFuncionarios from '../../components/ModalDeleteConfirmFuncionarios';
import api from '../../api';
import { toast } from 'react-toastify';
import { FaUser, FaUserCog , FaTrashAlt } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import {
  Container,
  LogoArea,
  LogoImage,
  LogoImageDark,
  HeaderSection,
  BackButton,
  TitleGroup,
  Title,
  Subtitle,
  ContentGrid,
  Section,
  SectionHeader,
  SectionTitleGroup,
  SectionIcon,
  SectionTitleText,
  SectionTitle,
  SectionSubtitle,
  AddButton,
  EmployeeList,
  EmployeeCard,
  EmployeeAvatar,
  EmployeeInfo,
  EmployeeName,
  EmployeeEmail,
  EmployeeRole,
  EmployeeActions,
  IconButton,
  EmptyState
} from './styles';

const GestaoFuncionarios = () => {
  const navigate = useNavigate();
  const { theme } = useAccessibility();

  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedFunc, setSelectedFunc] = useState(null);

  const loadFuncionarios = async () => {
    try {
      setLoading(true);
      const res = await api.get('/usuarios');
      const data = res.data;

      let lista = [];
      
      if (Array.isArray(data)) {
        lista = data;
      } 
      else if (data && typeof data === 'object') {
        if (data.usuarios && Array.isArray(data.usuarios)) {
          lista = data.usuarios;
        }
        else if (data.data && Array.isArray(data.data)) {
          lista = data.data;
        }
        else if (data.content && Array.isArray(data.content)) {
          lista = data.content;
        }
        else {
          lista = [data];
        }
      }

      const filtrados = lista.filter(f => {
        const cargo = (f.cargo || '').toUpperCase();
        return cargo === 'ADMINISTRADOR' || cargo === 'SUPERVISOR' || cargo === 'COLABORADOR';
      });

      setFuncionarios(filtrados);
    } 
    catch (err) {
      console.log('Erro ao carregar:', err);
      toast.error('Não foi possível carregar os funcionários');
      setFuncionarios([]);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFuncionarios();
  }, []);

  const handleAdd = async (dados) => {
    try {
      const cargoValido = ['ADMINISTRADOR', 'SUPERVISOR', 'COLABORADOR'].includes(dados.cargo)
        ? dados.cargo
        : 'COLABORADOR';

      const usuarioPayload = {
        nomeCompleto: dados.nomeCompleto,
        email: dados.email,
        cpf: dados.cpf.replace(/\D/g, ''),
        senha: "",
        cargo: cargoValido,
      };

      const formData = new FormData();
      
      formData.append('usuario', JSON.stringify(usuarioPayload));
      
      if (dados.fotoFile && dados.fotoFile instanceof File) {
        formData.append('foto', dados.fotoFile);
      }

      const res = await api.post('/usuarios', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const novoFunc = {
        ...res.data,
        nomeCompleto: res.data.nomeCompleto,
        email: res.data.email,
        cpf: res.data.cpf,
        cargo: res.data.cargo,
        fotoUrl: res.data.fotoUrl
      };

      setFuncionarios(prev => [...prev, novoFunc]);
      setAddModalOpen(false);
      toast.success('Funcionário adicionado!');
    } 
    catch (err) {
      console.log('Erro ao adicionar:', err);
      if (err.response?.status === 409) {
        toast.error('Email ou CPF já existe');
      } else {
        toast.error('Erro ao cadastrar');
      }
    }
  };

  const handleEdit = async (dados) => {
    try {
      const { id, ...resto } = dados;

      const usuarioPayload = {
        nomeCompleto: resto.nomeCompleto,
        email: resto.email,
        cpf: resto.cpf ? resto.cpf.replace(/\D/g, '') : '',
        cargo: resto.cargo
      };

      const formData = new FormData();
      
      formData.append('usuario', JSON.stringify(usuarioPayload));
      
      if (resto.fotoFile && resto.fotoFile instanceof File) {
        formData.append('foto', resto.fotoFile);
      }

      const res = await api.put(`/usuarios/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setFuncionarios(prev =>
        prev.map(f => {
          if (f.id === id) {
            return {
              ...f,
              ...res.data,
              nomeCompleto: res.data.nomeCompleto || f.nomeCompleto,
              email: res.data.email || f.email,
              cpf: res.data.cpf || f.cpf,
              cargo: res.data.cargo || f.cargo,
              fotoUrl: res.data.fotoUrl || f.fotoUrl
            };
          }
          return f;
        })
      );

      setEditModalOpen(false);
      setSelectedFunc(null);
      toast.success('Alterações salvas!');
    } 
    catch (err) {
      console.log('Erro ao editar:', err);
      if (err.response?.status === 403) {
        toast.error('Sem permissão para editar');
      } else if (err.response?.status === 409) {
        toast.error('Dados já existem');
      } else {
        toast.error('Erro ao atualizar');
      }
    }
  };

  const handleDelete = async () => {
    if (!selectedFunc) return;

    try {
      await api.delete(`/usuarios/${selectedFunc.id}`);

      setFuncionarios(prev => prev.filter(f => f.id !== selectedFunc.id));
      setDeleteModalOpen(false);
      setSelectedFunc(null);

      toast.success('Funcionário removido!');
    } 
    catch (err) {
      console.log('Erro ao excluir:', err);
      if (err.response?.status === 403) {
        toast.error('Sem permissão para excluir');
      } else {
        toast.error('Erro ao remover');
      }
    }
  };

  const openEdit = (func) => {
    setSelectedFunc(func);
    setEditModalOpen(true);
  };

  const openDelete = (func) => {
    setSelectedFunc(func);
    setDeleteModalOpen(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  const renderAvatar = (func) => {
    const avatar = func.fotoUrl;

    if (avatar && avatar !== 'foto_url') {
      return (
        <img
          src={avatar}
          alt={func.nomeCompleto || 'Funcionário'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }
    return <FaUser />;
  };

  const getBadgeColor = (cargo) => {
    const cargoUp = cargo?.toUpperCase() || '';
    
    if (cargoUp.includes('ADMIN')) {
      return { background: '#f15400', color: 'white' };
    } else if (cargoUp.includes('SUPERVISOR')) {
      return { background: '#059669', color: 'white' };
    } else if (cargoUp.includes('COLABORADOR')) {
      return { background: '#0891b2', color: 'white' };
    } else {
      return { background: '#6b7280', color: 'white' };
    }
  };

  const formatCPF = (cpf) => {
    if (!cpf) return 'Não informado';
    const clean = cpf.replace(/\D/g, '');
    if (clean.length === 11) {
      return clean.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return clean;
  };

  const getCargoDisplay = (cargo) => {
    const map = {
      'ADMINISTRADOR': 'Administrador',
      'SUPERVISOR': 'Supervisor',
      'COLABORADOR': 'Colaborador'
    };
    return map[cargo] || cargo;
  };

  const handleKeyAdd = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setAddModalOpen(true);
    }
  };

  if (loading) {
    return (
      <Container theme={theme}>
        <LogoArea>
          {theme === 'light' ? <LogoImage /> : <LogoImageDark />}
        </LogoArea>
        <HeaderSection>
          <BackButton onClick={goBack}>
            <IoIosArrowBack size={30} />
          </BackButton>
          <TitleGroup>
            <Title>Gestão de Funcionários</Title>
            <Subtitle>Carregando...</Subtitle>
          </TitleGroup>
        </HeaderSection>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #0891b2',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      </Container>
    );
  }

  return (
    <Container theme={theme} role="main" id="gestao-funcionarios-page">
      <LogoArea>
        {theme === 'light' ? <LogoImage aria-label="Logo TareFiz" /> : <LogoImageDark aria-label="Logo TareFiz" />}
      </LogoArea>

      <HeaderSection>
        <BackButton onClick={goBack} aria-label="Voltar">
          <IoIosArrowBack size={30} aria-hidden="true" />
        </BackButton>

        <TitleGroup>
          <Title>Gestão de Funcionários</Title>
          <Subtitle>Cadastre, edite e exclua funcionários do sistema</Subtitle>
        </TitleGroup>
      </HeaderSection>

      <ContentGrid>
        <Section
          theme={theme}
          onClick={() => setAddModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyAdd}
          aria-label="Botão para cadastrar novo funcionário"
        >
          <SectionHeader $withContent={false}>
            <SectionTitleGroup>
              <SectionIcon aria-hidden="true"><FaUserCog /></SectionIcon>
              <SectionTitleText>
                <SectionTitle>Cadastrar Novo Funcionário</SectionTitle>
                <SectionSubtitle>Adicione novos funcionários ao sistema</SectionSubtitle>
              </SectionTitleText>
            </SectionTitleGroup>
            <AddButton
              onClick={(e) => {
                e.stopPropagation();
                setAddModalOpen(true);
              }}
              aria-label="Abrir formulário de cadastro"
            >
              <span><BiPlus size={28} aria-hidden="true" /></span>
              Adicionar
            </AddButton>
          </SectionHeader>
        </Section>

        <Section theme={theme} role="region" aria-labelledby="lista-funcionarios-title">
          <SectionHeader $withContent={true}>
            <SectionTitleGroup>
              <SectionIcon aria-hidden="true"><BsFillPeopleFill /></SectionIcon>
              <SectionTitleText>
                <SectionTitle id="lista-funcionarios-title">Funcionários Cadastrados</SectionTitle>
                <SectionSubtitle>Edite cargos e gerencie os funcionários do sistema</SectionSubtitle>
                <div style={{
                  fontSize: '0.95rem',
                  color: theme === 'light' ? '#919494ff' : '#aaababff',
                  marginTop: '4px',
                  fontWeight: '600'
                }} aria-live="polite">
                  Total: {funcionarios.length} funcionário{funcionarios.length !== 1 ? 's' : ''}
                </div>
              </SectionTitleText>
            </SectionTitleGroup>
          </SectionHeader>

          <EmployeeList aria-label="Lista de funcionários cadastrados">
            {funcionarios.length === 0 ? (
              <EmptyState role="alert">
                Nenhum funcionário encontrado
                <div style={{ marginTop: '15px' }}>
                  <button
                    onClick={loadFuncionarios}
                    style={{
                      padding: '8px 16px',
                      background: '#0891b2',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                    aria-label="Recarregar lista de funcionários"
                  >
                    Recarregar
                  </button>
                </div>
              </EmptyState>
            ) : (
              funcionarios.map((f, idx) => {
                const nome = f.nomeCompleto || `Funcionário ${idx + 1}`;
                const email = f.email || 'Sem email';
                const cargo = f.cargo || 'Sem cargo';
                const cpfFormatado = formatCPF(f.cpf);
                const cargoDisplay = getCargoDisplay(cargo);
                const badgeStyle = getBadgeColor(cargo);

                return (
                  <EmployeeCard key={f.id || f.codigo || `f-${idx}`} tabIndex="0" role="listitem" aria-label={`Funcionário: ${nome}`}>
                    <EmployeeAvatar aria-hidden="true">
                      {renderAvatar(f)}
                    </EmployeeAvatar>
                    <EmployeeInfo>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <EmployeeName>{nome}</EmployeeName>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          ...badgeStyle
                        }} aria-label={`Cargo: ${cargoDisplay}`}>
                          {cargoDisplay}
                        </span>
                      </div>
                      <EmployeeEmail aria-label={`E-mail: ${email}`}>{email}</EmployeeEmail>
                      <EmployeeRole>
                        {f.cpf && <span aria-label={`CPF: ${cpfFormatado}`}>{`CPF: ${cpfFormatado}`}</span>}
                        {f.id && <span aria-label={`Identificador: ${f.id}`}>{` | ID: ${f.id}`}</span>}
                      </EmployeeRole>
                    </EmployeeInfo>
                    <EmployeeActions>
                      <IconButton
                        onClick={() => openEdit(f)}
                        aria-label={`Editar funcionário ${nome}`}
                        title="Editar"
                      >
                        <MdEdit size={18} aria-hidden="true" />
                      </IconButton>
                      <IconButton
                        $delete
                        onClick={() => openDelete(f)}
                        aria-label={`Excluir funcionário ${nome}`}
                        title="Excluir"
                      >
                        <FaTrashAlt size={18} aria-hidden="true" />
                      </IconButton>
                    </EmployeeActions>
                  </EmployeeCard>
                );
              })
            )}
          </EmployeeList>
        </Section>
      </ContentGrid>

      {addModalOpen && (
        <ModalFuncionarios
          isOpen={addModalOpen}
          onClose={() => setAddModalOpen(false)}
          onSubmit={handleAdd}
        />
      )}

      {selectedFunc && editModalOpen && (
        <ModalFuncionarios
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setSelectedFunc(null);
          }}
          onSubmit={handleEdit}
          funcionario={selectedFunc}
        />
      )}

      {selectedFunc && deleteModalOpen && (
        <ModalDeleteConfirmFuncionarios
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setSelectedFunc(null);
          }}
          onConfirm={handleDelete}
          funcionarioNome={selectedFunc.nomeCompleto || selectedFunc.nome}
        />
      )}
    </Container>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default GestaoFuncionarios;