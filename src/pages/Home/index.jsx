import { lazy, Suspense, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../api';
import { organizeTasksIntoBoard } from "../../components/Dashboard/columnData";
import Header from '../../components/Header';
import HomeFilter from '../../components/HomeFilter';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard = lazy(() => import('../../components/Dashboard'));

const Home = () => {
    const [boardData, setBoardData] = useState(null);
    const [colaboradores, setColaboradores] = useState([]);
    const { loading } = useAuth();
    const [status, setStatus] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [responsavelId, setResponsavelId] = useState("");
    const [notifications, setNotifications] = useState([]);


    const movementRules = {
        'planejada': ['a-fazer'],
        'a-fazer': ['em-andamento'],
        'em-andamento': ['pausada', 'concluida'],
        'pausada': ['em-andamento'],
        'concluida': []
    };

    const columnOrder = ['planejada', 'a-fazer', 'em-andamento', 'pausada', 'concluida'];
    const columnTitles = {
        'planejada': 'Planejadas',
        'a-fazer': 'A Fazer',
        'em-andamento': 'Em Andamento',
        'pausada': 'Pausadas',
        'concluida': 'Concluídas'
    };

    useEffect(() => {
        if (!loading) {
            loadTasks()
            fetchColaboradores();
            fetchNotifications();
        }
    }, [loading]);

    const loadTasks = async () => {
        try {
            const response = await api.get('/tarefas');
            const tasks = response.data;
            let dataFormatada = organizeTasksIntoBoard(tasks);
            setBoardData(dataFormatada);
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    const fetchColaboradores = async () => {
        try {
            const response = await api.get('/usuarios');
            const colab = response.data;
            if (colab) {
                setColaboradores(colab);
            } else {
                toast.error('Erro ao encontrar colaboradores.');
            }
        } catch (error) {
            console.error('Erro ao buscar colaboradores:', error);
        }
    }

    const fetchNotifications = async () => {
        try {
            const response = await api.get('/notificacoes');
            const notif = response.data;
            if (notif) {
                setNotifications(notif);
            } else {
                toast.error("Erro ao encontrar notificações");
            }
        } catch (err) {
            setError('Não foi possível carregar as notificações.');
        }
    };

    const handleMarcarComoLida = async (notifId) => {
        try {
            const response = await api.put(`/notificacoes/${notifId}/lida`)
            toast.success("Notificação marcada como lida!")
            fetchNotifications();

        } catch (error) {
            toast.error("Falha ao atualizar a notificação.")
        }
    }

    const handleCreateTask = async (taskPayload) => {
        try {
            const idPrimeiraTask = boardData.columns['planejada'].taskIds[0];
            const posicaoPrimeiraTask = boardData.tasks[idPrimeiraTask]?.posicao || 2000;
            const newTask = {
                ...taskPayload,
                posicao: posicaoPrimeiraTask / 2
            }
            console.log(newTask);
            const response = await api.post("/tarefas", {
                "titulo": newTask.titulo,
                "descricao": newTask.descricao,
                "prazoEntrega": newTask.prazoEntrega,
                "prioridade": newTask.prioridade,
                "responsavelId": newTask.responsavelId,
                // "posicao": taskPayload.posicao
            });

            const newTaskDoBackend = response.data;

            setBoardData((prevBoard) => {
                const columnId = 'planejada';
                const column = prevBoard.columns[columnId];

                const newTasks = {
                    ...prevBoard.tasks,
                    [newTaskDoBackend.id]: newTaskDoBackend
                };

                const newColumn = {
                    ...column,
                    taskIds: [newTaskDoBackend.id, ...column.taskIds]
                };

                return {
                    ...prevBoard,
                    tasks: newTasks,
                    columns: {
                        ...prevBoard.columns,
                        [columnId]: newColumn
                    }
                };
            });

        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
            alert("Erro ao criar tarefa.");
        }
    };

    const filtrarTarefas = async () => {
        try {
            const params = {};
            if (status) params.status = status;
            if (prioridade) params.prioridade = prioridade;
            if (responsavelId) params.responsavelId = responsavelId;

            const response = await api.get("/tarefas", { params });
            const tasks = response.data;
            let dataFormatada = organizeTasksIntoBoard(tasks);
            setBoardData(dataFormatada);
        } catch (error) {
            console.error("Erro ao filtrar tarefas:", error);
        }
    };

    useEffect(() => {
        filtrarTarefas();
    }, [status, prioridade, responsavelId]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} role="main" id="home-page-container">
            <Header
                onCreateTask={handleCreateTask}
                colaboradores={colaboradores}
                notifications={notifications}
                onMarkAsRead={handleMarcarComoLida}
            />
            <HomeFilter
                status={status}
                setStatus={setStatus}
                prioridade={prioridade}
                setPrioridade={setPrioridade}
                responsavelId={responsavelId}
                setResponsavelId={setResponsavelId}
                colaboradores={colaboradores}
            />
            <Suspense fallback={<div />}>
                <Dashboard
                    boardData={boardData}
                    setBoardData={setBoardData}
                    colaboradores={colaboradores}
                />
            </Suspense>
        </div>
    );
};

export default Home;