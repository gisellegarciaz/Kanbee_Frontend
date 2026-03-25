import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    GlassHeader,
    LogoArea,
    LogoImage,
    LogoImageDark,
    UserRoleBadge,
    ActionsContainer,
    MenuButton,
    HamburgerButton,
    MobileMenu,
    MobileMenuOverlay,
    MobileMenuHeader,
    MobileMenuTitle,
    MobileMenuCloseButton,
    MobileMenuButton,
    SideButtonsGroup,
    MobileMenuButtonCreate,
    MobileMenuButtonSair
} from './styles';

import {
    BiPlus,
    BiBarChart,
    BiShield,
    BiLogOut,
    BiMenu,
    BiX,
    BiBell
} from "react-icons/bi";
import { useAccessibility } from '../../contexts/AccessibilityContext';
import ModalNewTask from '../ModalNewTask';
import Notificacoes from '../Notificacoes';
import api from '../../api';
import { useAuth } from '../../hooks/AuthContext';

const Header = ({ onCreateTask, colaboradores, notifications, onMarkAsRead }) => {
    const navigate = useNavigate();
    // const [userRole] = useState('ADMINISTRADOR');
    const { userRole, logout } = useAuth();
    const canManageEmployees = userRole === 'ADMINISTRADOR' || userRole === 'SUPERVISOR';
    const { theme } = useAccessibility();
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNotificacoesOpen, setIsNotificacoesOpen] = useState(false);

    const handleLogout = () => {
        logout();
    };

    const handleNavigateToGestao = () => {
        navigate('/gestao-funcionarios');
        setIsMobileMenuOpen(false);
    };

    const handleNavigateToRelatorios = () => {
        navigate('/relatorios');
        setIsMobileMenuOpen(false);
    };

    const handleCreateTask = () => {
        setShowModal(true);
        setIsMobileMenuOpen(false);
    };

    const handleLogoutClick = () => {
        handleLogout();
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <GlassHeader role="banner">
                <LogoArea>
                    {theme === 'light' ? (
                        <LogoImage aria-label="Logo TareFiz - Voltar para Home" role="img" />
                    ) : (
                        <LogoImageDark aria-label="Logo TareFiz - Voltar para Home" role="img" />
                    )}
                    <UserRoleBadge aria-label={`Nível de acesso: ${userRole}`}>{userRole}</UserRoleBadge>
                </LogoArea>

                <ActionsContainer role="navigation" aria-label="Menu Principal">
                    <MenuButton
                        $variant="primary"
                        aria-label="Criar nova tarefa"
                        onClick={handleCreateTask}
                        id="btn-create-task"
                    >
                        <BiPlus size={20} aria-hidden="true" /> Tarefa
                    </MenuButton>

                    {canManageEmployees &&
                        <MenuButton
                            className="outline"
                            aria-label="Visualizar relatórios de produtividade"
                            onClick={handleNavigateToRelatorios}
                            id="btn-relatorios"
                        >
                            <BiBarChart size={20} aria-hidden="true" /> Relatórios
                        </MenuButton>}

                    {canManageEmployees && (
                        <MenuButton
                            className="outline"
                            aria-label="Gerenciar cadastro de funcionários"
                            onClick={handleNavigateToGestao}
                            id="btn-funcionarios"
                        >
                            <BiShield size={20} aria-hidden="true" /> Funcionários
                        </MenuButton>
                    )}

                    <MenuButton
                        className="outline"
                        aria-label="Abrir notificações"
                        onClick={() => setIsNotificacoesOpen(true)}
                        id="btn-notificacoes"
                    >
                        <BiBell size={20} aria-hidden="true" /> Notificações
                    </MenuButton>

                    <MenuButton
                        aria-label="Sair do sistema"
                        onClick={handleLogoutClick}
                        id="btn-logout"
                    >
                        <BiLogOut size={20} aria-hidden="true" /> Sair
                    </MenuButton>
                </ActionsContainer>

                <HamburgerButton
                    aria-label="Abrir menu lateral"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <BiMenu size={24} aria-hidden="true" />
                </HamburgerButton>
            </GlassHeader>

            {isMobileMenuOpen && (
                <>
                    <MobileMenuOverlay onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileMenu $isOpen={isMobileMenuOpen} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de Navegação Lateral">
                        <MobileMenuHeader>
                            <MobileMenuTitle>Menu</MobileMenuTitle>
                            <MobileMenuCloseButton
                                aria-label="Fechar menu"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <BiX size={24} aria-hidden="true" />
                            </MobileMenuCloseButton>
                        </MobileMenuHeader>

                        <SideButtonsGroup aria-label="Links do menu lateral">
                            <MobileMenuButtonCreate
                                $variant="primary"
                                aria-label="Criar nova tarefa"
                                onClick={handleCreateTask}
                            >
                                <BiPlus size={20} aria-hidden="true" /> Tarefa
                            </MobileMenuButtonCreate>

                            <MobileMenuButton
                                className="outline"
                                aria-label="Visualizar relatórios de produtividade"
                                onClick={handleNavigateToRelatorios}
                            >
                                <BiBarChart size={20} aria-hidden="true" /> Relatórios
                            </MobileMenuButton>

                            {canManageEmployees && (
                                <MobileMenuButton
                                    className="outline"
                                    aria-label="Gerenciar cadastro de funcionários"
                                    onClick={handleNavigateToGestao}
                                >
                                    <BiShield size={20} aria-hidden="true" /> Funcionários
                                </MobileMenuButton>
                            )}

                            <MobileMenuButton
                                className="outline"
                                aria-label="Abrir notificações"
                                onClick={() => setIsNotificacoesOpen(true)}
                            >
                                <BiBell size={20} aria-hidden="true" /> Notificações
                            </MobileMenuButton>

                            <MobileMenuButtonSair
                                aria-label="Sair do sistema"
                                onClick={handleLogoutClick}
                            >
                                <BiLogOut size={20} aria-hidden="true" /> Sair
                            </MobileMenuButtonSair>
                        </SideButtonsGroup>
                    </MobileMenu>
                </>
            )}

            {showModal && (
                <ModalNewTask
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onCreateTask={onCreateTask}
                    colaboradores={colaboradores}
                />
            )}

            <Notificacoes
                isOpen={isNotificacoesOpen}
                onClose={() => setIsNotificacoesOpen(false)}
                notifications={notifications}
                onMarkAsRead={onMarkAsRead}
            />
        </>
    );
};

export default Header;