import Card from './Card'
import { Container } from './styles'
import { CategoryDatas } from '@data/index'
import { FC, useEffect, useRef } from 'react'
import { Button } from '@components/Navbar/styles'
import { useRouter } from 'next/router'

const Categories: FC = () => {
    const containerRef = useRef<any>(null)
    const router = useRouter()

    const HandleScroll = () => {
        if (router.pathname === '/') {
            if (window.scrollY > 450 && window.scrollY < 1640) {
                containerRef.current.style.top = `${scrollY - 250}` + 'px'
            } else if (window.scrollY > 1650) {
                containerRef.current.style.top = '1280px'
            } else {
                containerRef.current.style.top = '1px'
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', HandleScroll)

        return () => window.removeEventListener('scroll', HandleScroll)
    }, [])

    return (
        <Container ref={containerRef}>
            {router.pathname === '/kategori-detay' && (
                <Button primary width={240} mb={20}>
                    Tüm 2. El
                </Button>
            )}
            {CategoryDatas.map((data, i) => (
                <Card
                    key={i}
                    href={data.href}
                    src={data.src}
                    text={data.text}
                />
            ))}
        </Container>
    )
}

export default Categories
