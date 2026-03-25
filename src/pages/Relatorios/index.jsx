import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveBar } from '@nivo/bar'
import { BiArrowBack, BiBarChartAlt, BiCheckCircle, BiLineChart } from "react-icons/bi";
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { IoIosArrowBack } from "react-icons/io";
import { CardStat } from '../../components/CardEstatisticas/index';
import { CardGraph } from '../../components/CardGraficos/index';

import {
    Container,
    HeaderSection,
    BackButton,
    TitleGroup,
    Title,
    Subtitle,
    CardsGrid,
    LogoArea,
    LogoImage,
    LogoImageDark,
    CardGraphContainer,
    Loader
} from './styles';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../api';



function Relatorios() {

    const navigate = useNavigate();
    const { theme } = useAccessibility();
    const { loading } = useAuth();

    const [taskList, setTaskList] = useState([]);
    const [statusData, setStatusData] = useState([]);
    const [priorityData, setPriorityData] = useState([]);
    const [stats, setStats] = useState({ total: 0, concluidas: 0, taxa: '0.0' });
    const [ pageLoading, setPageLoading ] = useState(true);

    useEffect(() => {
        if (!loading) {
            getTasks();
        }
    }, [loading]);

    const teste = (task) => {
        console.log(task);
    }

    const getTasks = async () => {
        try {
            const response = await api.get('/tarefas');

            const dataFromApi = response.data;
            if (dataFromApi) {
                setTaskList(dataFromApi);

                const formattedStatusData = convertDataPerStatus(dataFromApi);
                setStatusData(formattedStatusData);

                const formattedPriorityData = convertDataPerPriority(dataFromApi);
                setPriorityData(formattedPriorityData);

                const calculatedStats = calculateStats(dataFromApi);
                setStats(calculatedStats);
                setPageLoading(false);

            } else {
                toast.error('Erro ao carregar tarefas.');
            }
        } catch (error) {
            toast.error('Erro ao buscar tarefas:', error);
        }
    }

    const convertDataPerStatus = (data = []) => {
        const taskCounts = data.reduce((acc, task) => {
            const status = task.status;
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(taskCounts).map(status => ({
            status: status,
            count: taskCounts[status],
        }))
    }

    const convertDataPerPriority = (data = []) => {
        const taskCounts = data.reduce((acc, task) => {
            const prioridade = task.prioridade;
            acc[prioridade] = (acc[prioridade] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(taskCounts).map(prioridade => ({
            prioridade: prioridade,
            count: taskCounts[prioridade],
        }))
    }

    const calculateStats = (data = []) => {
        const total = data.length;
        const concluidas = data.filter(t =>
            t.status === 'CONCLUIDA' || t.status === 'concluida'
        ).length;

        const taxa = total > 0 ? ((concluidas / total) * 100).toFixed(1) : '0.0';

        return { total, concluidas, taxa };
    };

    return (
        <Container theme={(theme)} role="main" id="relatorios-page">

            <LogoArea>
                {theme === 'light' ? <LogoImage aria-label="Logo TareFiz" /> : <LogoImageDark aria-label="Logo TareFiz" />}
            </LogoArea>
            <HeaderSection>
                <BackButton onClick={() => navigate(-1)} aria-label="Voltar para página anterior">
                    <IoIosArrowBack size={30} aria-hidden="true" />
                </BackButton>

                <TitleGroup>
                    <Title>Relatórios</Title>
                    <Subtitle>Análise de produtividade e estatísticas</Subtitle>
                </TitleGroup>
            </HeaderSection>

            { !pageLoading && <>
                <CardsGrid role="region" aria-label="Estatísticas gerais">
                <CardStat
                    title="Total de Tarefas"
                    value={stats.total}
                    description="Todas as tarefas cadastradas"
                    icon={<BiBarChartAlt aria-hidden="true" />}
                />

                <CardStat
                    title="Tarefas Concluídas"
                    value={stats.concluidas}
                    description={`De ${stats.total} tarefas`}
                    icon={<BiCheckCircle aria-hidden="true" />}
                />

                <CardStat
                    title="Taxa de Conclusão"
                    value={`${stats.taxa}%`}
                    description="Percentual de tarefas concluídas"
                    icon={<BiLineChart aria-hidden="true" />}
                />
            </CardsGrid>

            <CardGraphContainer role="region" aria-label="Gráficos de análise">

                <CardGraph
                    data={statusData}
                    theme={theme}
                    indexBy="status"
                    title="Tarefas por Status"
                    aria-label="Gráfico de tarefas por status"
                />

                <CardGraph
                    data={priorityData}
                    theme={theme}
                    indexBy="prioridade"
                    title="Tarefas por Prioridade"
                    aria-label="Gráfico de tarefas por prioridade"
                />

            </CardGraphContainer>
            </>
            }

            { pageLoading && 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <Loader />
            </div>}
        </Container>
    );
}

export default Relatorios;