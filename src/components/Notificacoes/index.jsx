import React, { useEffect, useState } from 'react';
import { BiX, BiBell } from 'react-icons/bi';
import {
    Overlay,
    Panel,
    Header,
    Title,
    CloseButton,
    Content,
    EmptyState,
    TitleContainer
} from './styles';
import api from '../../api';
import NotificacaoCard from '../NotificacaoCard';

const Notificacoes = ({ isOpen, onClose, notifications, onMarkAsRead }) => {
    if (!isOpen) return null;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleBackgroundClick = () => {
        onClose?.();
    };

    const handlePanelClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Overlay onClick={handleBackgroundClick} aria-modal="true" role="dialog">
            <Panel onClick={handlePanelClick}>
                <Header>
                    <TitleContainer>
                        <BiBell size={30} />
                        <Title>Notificações</Title>
                    </TitleContainer>
                    <CloseButton
                        type="button"
                        aria-label="Fechar notificações"
                        onClick={onClose}
                    >
                        <BiX size={18} />
                    </CloseButton>
                </Header>

                <Content>
                    {isLoading && (
                        <EmptyState>Carregando notificações...</EmptyState>
                    )}

                    {error && !isLoading && (
                        <EmptyState>{error}</EmptyState>
                    )}

                    {!isLoading && !error && notifications.length === 0 && (
                        <EmptyState>
                            Você ainda não possui notificações. Assim que algo importante acontecer, vamos mostrar aqui.
                        </EmptyState>
                    )}

                    {!isLoading && !error && notifications.map((notification) => (
                        <NotificacaoCard
                            key={notification.id || JSON.stringify(notification)}
                            notification={notification}
                            onMarkAsRead={onMarkAsRead}
                        />
                    ))}
                </Content>
            </Panel>
        </Overlay>
    );
};

export default Notificacoes;


