import styled from 'styled-components';

export const Container = styled.div`
    font-family: sans-serif;
    margin-bottom: 10px;
`;

export const DropArea = styled.div`
    border: 2px dashed ${props => props.$isDragActive ? '#3182ce' : '#cbd5e0'};
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    background-color: var(--modal-bg);
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;

    &:hover {
        border-color: #3182ce;
        background-color: rgba(202, 230, 252, 0.59);
    }

    html.dark &:hover {
        border-color: #76b4edff;
        background-color: rgba(202, 230, 252, 0.1);
    }

    @media (max-width: 440px) {
        padding: 20px 16px;
        max-height: 9vh;
        margin: 0;
    }
`;

export const Text = styled.p`
    color: var(--subtitle-color);
    font-size: 1.1rem;
    margin: 0;
    pointer-events: none;

    @media (max-width: 440px) {
        display:none;
    }
`;

export const Highlight = styled.span`
    color: #247dd1;
    font-weight: 500;
`;

export const SubText = styled.p`
    font-size: 0.8rem;
    margin-top: 4px;
    color: var(--subtitle-color);
    margin-bottom: 0;
    pointer-events: none;
`;

export const FileList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 12px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const FileItem = styled.li`
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 0.85rem;
    color: #4a5568;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

export const FileName = styled.span`
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #e53e3e;
    margin-left: 8px;
    cursor: pointer;
    font-weight: bold;
    padding: 0 4px;
    font-size: 1.1rem;
    line-height: 1;

    &:hover {
        color: #c53030;
    }
`;

export const PreviewImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 8px;
`;