import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from '../TaskCard/TaskCard';
import { ListContainer } from './styles';

const CardList = ({ 
    tasks = [], 
    columnId,
    onEdit,
    onDelete, 
    colaboradores,
    onAttachmentsUpdated,
}) => {

    // garante que tasks seja sempre um array
    const safeTasks = tasks || [];
    
    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => (
                <ListContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    $isDraggingOver={snapshot.isDraggingOver}
                >
                    {tasks.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            
                            color: '#999',
                            fontSize: '14px',
                            fontStyle: 'italic'
                        }}>
                            
                        </div>
                    ) : (
                        safeTasks.map((task, index) => (
                            <Draggable 
                                key={task.id} 
                                draggableId={String(task.id)} 
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            ...provided.draggableProps.style,
                                            marginBottom: '12px'
                                        }}
                                    >
                                        <TaskCard
                                            task={task}
                                            onEdit={onEdit}
                                            onDelete={onDelete}
                                            isDragging={snapshot.isDragging}
                                            colaboradores={colaboradores}
                                            onAttachmentsUpdated={onAttachmentsUpdated}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))
                    )}
                    {provided.placeholder}
                </ListContainer>
            )}
        </Droppable>
    );
};

export default CardList;