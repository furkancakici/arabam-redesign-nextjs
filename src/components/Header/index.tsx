import { FC } from 'react'
import { HeaderImg, Wrapper } from './styles'
import { CardDatas } from '@data/index'
import Card from './Card'

const Header: FC = () => {
    return (
        <>
            <HeaderImg />

            <Wrapper>
                <Card data={CardDatas} />
            </Wrapper>
        </>
    )
}

export default Header
