import { FC } from 'react'
import { CardBody, CardTitle, CardLabel, StyledImg, StyledCard } from './styles'

type CardProps = {
    src: any
    title: string
    body: string
    label: string
}

const Card: FC<CardProps> = ({ src, title, body, label }) => {
    return (
        <StyledCard>
            <StyledImg src={src} alt={title} width="333" height="240" />
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
            <CardLabel>{label}</CardLabel>
        </StyledCard>
    )
}

export default Card
