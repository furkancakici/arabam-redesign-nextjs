import { StyledCard, Flex, CardLabel, StyledImg, Title } from './styles'

const Card = ({ data }) => {
    return (
        <>
            {data.map((d, i) => (
                <li key={i}>
                    <StyledCard>
                        <Flex>
                            <StyledImg>{d.src}</StyledImg>
                            <Title>{d.title}</Title>
                            <CardLabel>&gt;</CardLabel>
                        </Flex>
                    </StyledCard>
                </li>
            ))}
        </>
    )
}

export default Card
