import React, { useState, useRef, useEffect } from 'react'; 
import { FaUser } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  CloseButton,
  ModalContent,
  AvatarSection,
  AvatarCircle,
  AvatarPreview,
  UploadButton,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  ModalFooter,
  CancelButton,
  SubmitButton,
  HiddenFileInput
} from './styles';

const ModalFuncionarios = ({ isOpen, onClose, onSubmit, funcionario = null }) => {
  const fileRef = useRef(null);
  
  const [form, setForm] = useState({
    nome: '',      
    email: '',
    cpf: '',              
    senha: '',
    cargo: 'ADMINISTRADOR', 
    foto: null,
    fotoFile: null        
  });

  const [novaSenha, setNovaSenha] = useState('');
  const editando = !!funcionario;

  useEffect(() => {
    if (isOpen && funcionario) {
      setForm({
        nome: funcionario.nomeCompleto || funcionario.nameComplete || funcionario.nome || '',
        email: funcionario.email || '',
        cpf: funcionario.cpf || '', 
        cargo: funcionario.cargo || 'ADMINISTRADOR',
        foto: funcionario.fotoUrl || funcionario.qrwdUrl || funcionario.foto || funcionario.avatar || null,
        fotoFile: null,
        ...(funcionario.id && { id: funcionario.id })
      });
    } else if (isOpen && !funcionario) {
      setForm({
        nome: '',
        email: '',
        cpf: '',
        cargo: 'ADMINISTRADOR',
        foto: null,
        fotoFile: null
      });
    }
  }, [isOpen, funcionario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const clicarFoto = () => {
    fileRef.current?.click();
  };

  const handleArquivo = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      setForm(prev => ({ ...prev, fotoFile: arquivo }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(arquivo);
    }
  };

  const enviar = (e) => {
    e.preventDefault();
    
    if (!form.nome.trim()) {
      alert('Nome é obrigatório');
      return;
    }
    
    if (!form.email.trim()) {
      alert('Email é obrigatório');
      return;
    }

    if (!form.cpf.trim()) {
      alert('CPF é obrigatório');
      return;
    }
    
    const dados = {
      nomeCompleto: form.nome.trim(),
      email: form.email.trim(),
      cpf: form.cpf.replace(/\D/g, ''), 
      cargo: form.cargo,
      fotoUrl: form.foto,
      fotoFile: form.fotoFile 
    };

    if (editando && funcionario?.id) {
      dados.id = funcionario.id;
    }
    
    onSubmit(dados);
    onClose();
  };

  const formatarCPF = (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.substring(0, 11);
    
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    
    setForm(prev => ({ ...prev, cpf: valor }));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <ModalTitle>
              {editando ? 'Editar Funcionário' : 'Adicionar Funcionário'}
            </ModalTitle>
            <ModalSubtitle>
              {editando ? 'Atualize as informações do funcionário' : 'Preencha os dados do novo funcionário'}
            </ModalSubtitle>
          </div>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <ModalContent>
          <form onSubmit={enviar}>
            <AvatarSection>
              <AvatarCircle onClick={clicarFoto}>
                {form.foto && form.foto !== 'foto_url' ? (
                  <AvatarPreview src={form.foto} alt="" />
                ) : (
                  <FaUser size={50} color='black' />
                )}
              </AvatarCircle>
              <UploadButton type="button" onClick={clicarFoto}>
                {editando ? 'Alterar foto' : 'Escolher foto'}
              </UploadButton>
              <HiddenFileInput
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleArquivo}
              />
            </AvatarSection>

            <FormGroup>
              <FormLabel>Nome *</FormLabel>
              <FormInput
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="email@empresa.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>CPF *</FormLabel>
              <FormInput
                type="text"
                name="cpf"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={formatarCPF}
                maxLength="14"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Cargo *</FormLabel>
              <FormSelect
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
                required
              >
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="SUPERVISOR">Supervisor</option>
                <option value="COLABORADOR">Colaborador</option>
              </FormSelect>
            </FormGroup>

            <ModalFooter>
              <CancelButton type="button" onClick={onClose}>
                Cancelar
              </CancelButton>
              <SubmitButton type="submit">
                {editando ? 'Atualizar' : 'Salvar'}
              </SubmitButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalFuncionarios;