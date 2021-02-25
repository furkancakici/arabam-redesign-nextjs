import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    StyledUl,
    StyledLi,
    StyledImage,
    StyledSpan,
    StyledText,
} from './styles'

type CardProps = {
    href: string
    src: any
    text: string
}

const Card: FC<CardProps> = ({ href, src, text }) => {
    const router = useRouter()
    const style = {
        backgroundColor: router.pathname === href ? '#FAE9EB' : undefined,
        cursor: 'pointer',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <>
            <StyledUl>
                <StyledLi style={style}>
                    <Link href={href} passHref>
                        <a onClick={handleClick}>
                            <StyledSpan>
                                <StyledImage>{src}</StyledImage>{' '}
                                <StyledText>{text}</StyledText>
                            </StyledSpan>
                        </a>
                    </Link>
                </StyledLi>
            </StyledUl>
        </>
    )
}

export default Card
