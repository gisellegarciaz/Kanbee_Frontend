import { Container, Header, Title, IconWrapper, Value, Description } from './styles';

export function CardStat({ title, value, description, icon }) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <IconWrapper>
                    {icon}
                </IconWrapper>
            </Header>

            <Value>{value}</Value>

            <Description>{description}</Description>
        </Container>
    );
}