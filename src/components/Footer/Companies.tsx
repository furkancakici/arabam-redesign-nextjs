import { FC } from 'react'
import Link from 'next/link'
import { A, StyledComp } from './styles'

type Props = {
    href: string
    text: string
}

const Companies: FC<Props> = ({ href, text }) => {
    return (
        <>
            <StyledComp>
                <Link href={href} passHref>
                    {text}
                </Link>
            </StyledComp>
        </>
    )
}

export default Companies
