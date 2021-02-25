import { FC } from 'react'
import {
    CardBody,
    CardLabel,
    StyledImg,
    StyledCard,
    Flex,
    Title,
    Date,
    StyledSvgContainer,
} from './styles'
import Link from 'next/link'
import { Svg40, Svg41, Svg42 } from '@assets/icons'
import styled from 'styled-components'

type CardProps = {
    src: any
    city: string
    date: string
    title: string
    price: string
}

const Card: FC<CardProps> = ({ city, date, price, src, title }) => {
    return (
        <>
            <Link href="/ilan-detay" passHref>
                <a>
                    <StyledCard>
                        <SvgContainer />
                        <StyledImg
                            src={src}
                            alt={title}
                            width="160"
                            height="100"
                        />
                        <Flex>
                            <Title>{city}</Title>
                            <Date>{date}</Date>
                        </Flex>
                        <CardBody>{title}</CardBody>
                        <CardLabel>{price} TL</CardLabel>
                    </StyledCard>
                </a>
            </Link>
        </>
    )
}

export default Card

const SvgContainer = () => {
    return (
        <StyledSvgContainer>
            <Svg40 />
            <Svg41 />
            <Svg42 />
        </StyledSvgContainer>
    )
}
