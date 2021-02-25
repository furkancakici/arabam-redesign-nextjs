import { useEffect } from 'react'
import { NextPage } from 'next'
import { Wrapper } from '@assets/styles/GlobalStyles'
import NextHead from '@components/NextHead'
import CategoryDetail from '@components/Showcase/CategoryDetail'

const CategoryDetailPage: NextPage = () => {
    useEffect(() => {
        console.clear()
    }, [])

    return (
        <>
            <NextHead title="Kategori Detayları" />

            <Wrapper>
                <CategoryDetail />
            </Wrapper>
        </>
    )
}

export default CategoryDetailPage
