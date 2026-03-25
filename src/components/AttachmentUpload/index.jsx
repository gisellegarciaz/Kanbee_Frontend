import React, { useRef, useState } from 'react';
import * as S from './styles';

const AttachmentUpload = ({ value = [], onFilesChange }) => {
    const [isDragActive, setIsDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const handleFiles = (newFilesList) => {
        const newFilesArray = Array.from(newFilesList);

        const processedFiles = newFilesArray.map(file => {
            file.preview = URL.createObjectURL(file);
            return file;
        });

        const updatedList = [...value, ...processedFiles];

        onFilesChange(updatedList);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const onDragLeave = () => {
        setIsDragActive(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        if (e.dataTransfer.files?.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const onFileInputChange = (e) => {
        if (e.target.files?.length > 0) {
            handleFiles(e.target.files);
        }
    };

    const removeFile = (fileToRemove) => {
    if (fileToRemove.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
    }

    const updated = value.filter(file => file !== fileToRemove);
    onFilesChange(updated);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <S.Container>
            <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{ display: 'none' }}
                accept="image/*,.pdf,.doc,.docx"
            />

            <S.DropArea
                $isDragActive={isDragActive}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onClick={handleClick}
            >
                {isDragActive ? (
                    <S.Text>Solte os arquivos aqui...</S.Text>
                ) : (
                    <>
                        <S.Text>
                            Arraste arquivos ou <S.Highlight>clique para selecionar</S.Highlight>
                        </S.Text>
                        <S.SubText>(Imagens, PDF ou DOC)</S.SubText>
                    </>
                )}
            </S.DropArea>

            {value.length > 0 && (
                <S.FileList>
                    {value.map((file, index) => (
                        <S.FileItem key={`${file.name}-${index}`}>
                            {file.type?.startsWith('image/') ? (
                                <S.PreviewImage src={file.preview} alt="preview" />
                            ) : (
                                <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>📄</span>
                            )}
                            <S.FileName>{file.name}</S.FileName>

                            <S.RemoveButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(file);
                                }}
                            >
                                &times;
                            </S.RemoveButton>
                        </S.FileItem>
                    ))}
                </S.FileList>
            )}
        </S.Container>
    );
};

export default AttachmentUpload;
