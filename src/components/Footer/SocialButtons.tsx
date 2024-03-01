import Link from 'next/link'
import { FC } from 'react'
import { Icon, ButtonContainer, StyledSpan } from './styles'

type Props = {
    src: JSX.Element
    href: string
}

const AppButtons: FC<Props> = ({ src, href }) => {
    return (
        <>
            <ButtonContainer>
                <Link href={href} passHref>
                    <StyledSpan>
                        <Icon>{src}</Icon>
                    </StyledSpan>
                </Link>
            </ButtonContainer>
        </>
    )
}

export default AppButtons
