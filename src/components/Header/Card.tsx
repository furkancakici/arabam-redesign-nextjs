import {
    StyledCard,
    Flex,
    StyledImg,
    Title,
    CardBody,
    CardLabel,
} from './styles'

const Card = ({ data }) => {
    return (
        <>
            {data.map((d, i) => (
                <StyledCard key={i}>
                    <Flex>
                        <StyledImg>{d.src}</StyledImg> <Title>{d.title}</Title>
                    </Flex>
                    <CardBody>{d.body}</CardBody>
                    <CardLabel>{d.label}</CardLabel>
                </StyledCard>
            ))}
        </>
    )
}

export default Card
