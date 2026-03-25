import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const Container = styled.div`
    background: var(--bg-color);
    color: var(--text-color);
    padding: 24px;
    border-radius: 16px;
    width: 90%;
    max-width: 520px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        max-width: 95%;
    }
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.1rem;
`;

export const EmptyText = styled.p`
    margin: 8px 0 0;
    color: #888;
    font-size: 0.95rem;
`;

export const AttachmentList = styled.div`
    max-height: 260px;
    overflow-y: auto;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const AttachmentItem = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 12px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.06);
    gap: 12px;
`;

export const AttachmentContent = styled.div`
    flex: 1;
    min-width: 0;
`;

export const AttachmentInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    min-width: 0;
`;

export const AttachmentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;
`;

export const AttachmentName = styled.span`
    font-size: 0.95rem;
    color: var(--text-color);
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 280px;

    @media (max-width: 480px) {
        max-width: 180px;
    }
`;

export const AttachmentMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
`;

export const AttachmentType = styled.span`
    font-size: 0.8rem;
    color: #666;
    background: rgba(0, 0, 0, 0.05);
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 500;
`;

export const AttachmentDate = styled.span`
    font-size: 0.8rem;
    color: #888;
`;

export const AttachmentActions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const BaseButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: filter 0.2s, background 0.2s, color 0.2s;

    &:hover {
        filter: brightness(0.95);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ActionButton = styled(BaseButton)`
    background: #f5f5f5;
    color: #333;
`;

export const DeleteButton = styled(BaseButton)`
    background: #f44336;
    color: #fff;

    &:hover {
        background: #d32f2f;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
`;

export const CloseButton = styled(BaseButton)`
    background: var(--primary-color);
    color: #fff;
`;

