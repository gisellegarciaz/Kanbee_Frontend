import React from 'react';
import CardList from '../CardList';
import { 
    CardColumnWrapper,
    ColumnContainer, 
    Header, 
    Title, 
    TaskCountBadge
} from './styles';

const CardColumn = ({ 
    title = 'Lista Vazia', 
    bgColor,      
    id,               
    tasks = [],
    onEdit,
    onDelete, 
    colaboradores,
    onAttachmentsUpdated,
}) => {
    
    const columnTitle = title;
    const taskCount = tasks.length;
    const columnId = id || 'default-column';

    return (
        <CardColumnWrapper className="card-column-wrapper" role="region" aria-labelledby={`column-title-${columnId}`}>
            <Header className="column-header">
                    <Title className="column-title" id={`column-title-${columnId}`}>{columnTitle}</Title>
                    {taskCount > 0 && (
                        <TaskCountBadge className="task-count-badge" aria-label={`${taskCount} tarefas nesta coluna`}>
                            {taskCount}
                        </TaskCountBadge>
                    )}
                </Header>
            <ColumnContainer 
                className="column-container"
                $bgColor={bgColor}
                aria-label={`Lista de tarefas: ${columnTitle}`}
            >
                
                
                <CardList 
                    tasks={tasks}
                    columnId={columnId}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    colaboradores={colaboradores}
                    onAttachmentsUpdated={onAttachmentsUpdated}
                />
            </ColumnContainer>
        </CardColumnWrapper>
    );
};

export default CardColumn;