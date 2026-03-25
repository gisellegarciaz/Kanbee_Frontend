import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const CardContainer = styled.div`
    background: var(--bg-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: ${props => props.$isDragging 
        ? '0 8px 16px rgba(0,0,0,0.15)' 
        : '0 2px 8px rgba(0,0,0,0.08)'};
    border: 1px solid #e0e0e0;
    cursor: grab;
    transition: all 0.2s ease;
    opacity: ${props => props.$isDragging ? 0.9 : 1};
    position: relative;
    user-select: none;

    &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        transform: translateY(-1px);
    }

    &:active {
        cursor: grabbing;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
    gap: 8px;
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-weight: 600;
    color: var(--text-color);
    flex: 1;
    line-height: 1.4;
    word-break: break-word;
`;

export const DescriptionWrapper = styled.div`
    margin-bottom: 12px;
`;

export const CardDescription = styled.p`
    margin: 10px 0 0 0;
    color: var(--subtitle-color);
    line-height: 1.5;
    word-break: break-word;
    position: relative;

    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 'unset' : 2)};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ReadMoreButton = styled.button`
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    padding-right: 8px;
    margin: 0;
    text-align: right;

    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const BadgeContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
`;

export const PriorityBadge = styled.span`
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    background-color: ${props => {
        if (props.$priority.includes('alta')) return '#fbd3d9ff';
        if (props.$priority.includes('média') || props.$priority.includes('media')) return '#fce574ff';
        return '#E8F5E9';
    }};
    
    color: ${props => {
        if (props.$priority.includes('alta')) return '#a72121ff';
        if (props.$priority.includes('média') || props.$priority.includes('media')) return '#341a05ff';
        return '#2E7D32';
    }};
    
    border: none;
`;

export const DeadlineBadge = styled.span`
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    
    background-color: ${props => {
        if (props.$deadline.includes('prazo')) return '#0c5386ff';
        if (props.$deadline.includes('urgente')) return '#efcf00ff';
        if (props.$deadline.includes('concluida')) return '#48de4fff';
        return '#aa0404ff';
    }};
    
    color: ${props => {
        if (props.$deadline.includes('prazo')) return '#fff';
        if (props.$deadline.includes('urgente')) return '#000000ff';
        if (props.$deadline.includes('concluida')) return '#0b490eff';
        return '#ffffffff';
    }};
    
    border: none;
`;

export const CardFooter = styled.div`
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #F0F0F0;
`;

export const FooterRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const DateInfo = styled.div`
    font-size: 0.9rem;
    color: var(--subtitle-color);
    font-weight: 400;
    line-height: 1.4;
`;

export const ResponsibleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

export const ResponsibleImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ResponsibleInfo = styled.div`
    font-size: 1rem;
    color: var(--text-color);
    font-weight: 400;
    line-height: 1.4;
`;

export const AttachmentInfo = styled.div`
    font-size: 0.9rem;
    color: var(--link-color);
    font-weight: 400;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 6px;
    flex-shrink: 0;
    
    button {
        background: var(--bg-color);
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text-color);
        padding: 0;
        font-size: 14px;
        
        &:hover {
            background-color: #f0f7ff;
            border-color: #2196F3;
            color: #2196F3;
        }
        
        &:last-child:hover {
            background-color: #fff5f5;
            border-color: #f44336;
            color: #f44336;
        }
        
        &:active {
            transform: scale(0.95);
        }
    }
`;