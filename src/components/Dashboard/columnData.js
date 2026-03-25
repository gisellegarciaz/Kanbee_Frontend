const COLUMNS_LAYOUT = {
  'planejada': { 
    title: 'Planejadas', 
    bgColor: 'var(--status-color)' 
  },
  'a-fazer': { 
    title: 'A Fazer', 
    bgColor: 'var(--status-color)' 
  },
  'em-andamento': { 
    title: 'Em Andamento', 
    bgColor: 'var(--status-color)' 
  },
  'pausada': { 
    title: 'Pausadas', 
    bgColor: 'var(--status-color)' 
  },
  'concluida': { 
    title: 'Concluídas', 
    bgColor: 'var(--status-color)' 
  }
};

export const STATUS_TO_COLUMN_ID = {
  'PLANEJADA': 'planejada',
  'A_FAZER': 'a-fazer',
  'EM_ANDAMENTO': 'em-andamento',
  'PAUSADA': 'pausada',
  'CONCLUIDA': 'concluida'
};

export const COLUMN_TO_STATUS = {
            'planejada': 'PLANEJADA',
            'a-fazer': 'A_FAZER',
            'em-andamento': 'EM_ANDAMENTO',
            'pausada': 'PAUSADA',
            'concluida': 'CONCLUIDA'
        };


  export const movementRules = {
        'planejada': ['a-fazer'], 
        'a-fazer': ['em-andamento'], 
        'em-andamento': ['pausada', 'concluida'], 
        'pausada': ['em-andamento'], 
        'concluida': [] 
    };

  
  export const columnOrder = ['planejada', 'a-fazer', 'em-andamento', 'pausada', 'concluida'];
  export const columnTitles = {
        'planejada': 'Planejadas',
        'a-fazer': 'A Fazer',
        'em-andamento': 'Em Andamento',
        'pausada': 'Pausadas',
        'concluida': 'Concluídas'
    };

export const organizeTasksIntoBoard = (taskList = []) => {
  const tasks = {}; 
  
  const columns = {};
  
  Object.keys(COLUMNS_LAYOUT).forEach(colId => {
    columns[colId] = {
      id: colId,
      ...COLUMNS_LAYOUT[colId],
      taskIds: []
    };
  });

  taskList.forEach((task) => {
    const taskIdStr = String(task.id); 
    
    tasks[taskIdStr] = { ...task, id: taskIdStr };

    const targetColumnId = STATUS_TO_COLUMN_ID[task.status] || 'planejada';

    if (columns[targetColumnId]) {
      columns[targetColumnId].taskIds.push(taskIdStr);
    } else {
      columns['planejada'].taskIds.push(taskIdStr);
    }
  });

  return {
    tasks,
    columns,
    columnOrder: ['planejada', 'a-fazer', 'em-andamento', 'pausada', 'concluida']
  };
};