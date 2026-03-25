import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Container, Title, NoDataMessage } from './styles';

export function CardGraph({ data, theme, indexBy, title }) {
    return (
        <Container theme={theme}>
            <Title theme={theme}>
                {title}
            </Title>
            
            {data && data.length > 0 ? (
                <ResponsiveBar
                    data={data}
                    keys={['count']} 
                    indexBy={ indexBy } 
                    layout="horizontal" 
                    margin={{ top: 20, right: 50, bottom: 50, left: 110 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'category10' }}
                    colorBy="indexValue"
                    borderRadius={5}
                    theme={{
                        axis: {
                            ticks: { text: { fill: theme === 'light' ? '#333' : '#ccc' } },
                            legend: { text: { fill: theme === 'light' ? '#333' : '#ccc' } }
                        },
                        tooltip: {
                            container: {
                                background: '#333',
                                color: '#fff',
                            }
                        },
                        labels: {
                            text: {
                                fill: '#fff',
                                fontWeight: 'bold'
                            }
                        }
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Quantidade de Tarefas',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0
                    }}
                    motionConfig={{ mass: 53, tension: 80, friction: 53, clamp: true, precision: 0.01, velocity: 0 }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    role="application"
                    ariaLabel="Gráfico de barras de tarefas por status"
                />
            ) : (
                <NoDataMessage theme={theme}>
                    Sem dados para exibir.
                </NoDataMessage>
            )}
        </Container>
    );
}