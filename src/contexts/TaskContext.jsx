import React, { createContext, useMemo, useState } from "react";

export const TaskContext = createContext();

export const TASK_STATUS = {
  PLANEJADA: "Planejada",
  A_FAZER: "A Fazer",
  EM_ANDAMENTO: "Em Andamento",
  PAUSADA: "Pausada",
  CONCLUIDA: "Concluída",
};

const initialTasks = [
  { id: "1", title: "Configurar projeto", description: "Criar estrutura base", priority: "Média", responsible: "Patricia Sanches", deadline: "2025-12-22", status: TASK_STATUS.PLANEJADA },
  { id: "2", title: "Criar contexto", description: "Gerenciar estado global", priority: "Alta", responsible: "Pedro Sanches", deadline: "2025-12-19", status: TASK_STATUS.A_FAZER },
  { id: "3", title: "Montar Kanban", description: "Colunas e drag-and-drop", priority: "Baixa", responsible: "João Sanches", deadline: "2025-12-10", status: TASK_STATUS.EM_ANDAMENTO },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (taskId, newStatus) => {
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)));
  };

  const updateOrderInStatus = (status, orderedIds) => {
    setTasks((prev) => {
      const sameStatus = prev.filter((t) => t.status === status);
      const others = prev.filter((t) => t.status !== status);
      const reordered = orderedIds
        .map((id) => sameStatus.find((t) => t.id === id))
        .filter(Boolean);
      return [...others, ...reordered];
    });
  };

  const groupedByStatus = useMemo(() => {
    return {
      [TASK_STATUS.PLANEJADA]: tasks.filter((t) => t.status === TASK_STATUS.PLANEJADA),
      [TASK_STATUS.A_FAZER]: tasks.filter((t) => t.status === TASK_STATUS.A_FAZER),
      [TASK_STATUS.EM_ANDAMENTO]: tasks.filter((t) => t.status === TASK_STATUS.EM_ANDAMENTO),
      [TASK_STATUS.PAUSADA]: tasks.filter((t) => t.status === TASK_STATUS.PAUSADA),
      [TASK_STATUS.CONCLUIDA]: tasks.filter((t) => t.status === TASK_STATUS.CONCLUIDA),
    };
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        groupedByStatus,
        moveTask,
        updateOrderInStatus,
        TASK_STATUS,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};