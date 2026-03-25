import React from 'react';
import { CardContainer, Message, MarkAsReadButton } from './styles';
import { BiCheck } from 'react-icons/bi';

const NotificationCard = ({ notification, onMarkAsRead }) => {
    const isUnread = !notification?.lida;

    const getTaskName = () => {
        if (!notification) return 'desconhecida';
        return (
            notification?.titulo ||
            'desconhecida'
        );
    };

    const handleMarkAsRead = async () => {
        if (notification?.id && onMarkAsRead) {
            await onMarkAsRead(notification.id);
        }
    };

    return (
        <CardContainer $isUnread={isUnread}>
            <Message $isUnread={isUnread}>
                {notification.mensagem}
            </Message>
            {isUnread && (
                <MarkAsReadButton
                    onClick={handleMarkAsRead}
                    aria-label="Marcar como lida"
                    title="Marcar como lida"
                >
                    <BiCheck size={20} />
                </MarkAsReadButton>
            )}
        </CardContainer>
    );
};

export default NotificationCard;


