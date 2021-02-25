import { useEffect } from 'react'
import {
    Wrapper,
    MainSection,
    StyledSection,
} from '@assets/styles/GlobalStyles'
import { Categories, Header, Showcase, Slider } from '@components/index'
import { NextPage } from 'next'
import NextHead from '@components/NextHead'

const Home: NextPage = () => {
    useEffect(() => {
        console.clear()
    }, [])

    return (
        <>
            <NextHead title="Arabam Redesign App" />
            <Wrapper>
                <MainSection>
                    <Categories />
                    <StyledSection>
                        <Header />
                        <Showcase />
                    </StyledSection>
                </MainSection>
            </Wrapper>
            <Slider />
        </>
    )
}

export default Home
