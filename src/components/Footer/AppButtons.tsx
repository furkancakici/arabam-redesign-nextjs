import Link from 'next/link'
import { FC } from 'react'
import { Icon, ButtonContainer, StyledDIV, AppCard, StyledSpan } from './styles'

type Props = {
    src: JSX.Element
    PlatName: string
    href: string
}

const AppButtons: FC<Props> = ({ src, href, PlatName }) => {
    return (
        <>
            <ButtonContainer>
                <AppCard>
                    <Link href={href} passHref>
                        <a target="_blank" rel="noreferrer">
                            <StyledSpan>
                                <Icon>{src}</Icon>
                                <StyledDIV>
                                    <h2>{PlatName}</h2>
                                    <h3>indirebilirsiniz</h3>
                                    <h4>indirin</h4>
                                </StyledDIV>
                            </StyledSpan>
                        </a>
                    </Link>
                </AppCard>
            </ButtonContainer>
        </>
    )
}

export default AppButtons
