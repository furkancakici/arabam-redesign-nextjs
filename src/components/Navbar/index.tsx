import { FC, useState, useEffect } from 'react'
import {
    StyledNavbar,
    Button,
    NavWrapper,
    StyledHamburger,
    Navigation,
    NavList,
    MobileButton,
    StyledAdCard,
    StyledAdButton,
    StyledImgLogo,
    MobileSpan,
    MobileInput,
    Span,
    Input
} from './styles'
import { Sling as HamburgerMenu } from 'hamburger-react'
import { CardDatas } from '@data/index'
import Card from './Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

const Navbar: FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

    const route = useRouter()

    return (
        <>
            <NavWrapper>
                <StyledNavbar>
                    <Link href='/' passHref>
                        <StyledImgLogo
                            src='/images/logo.gif'
                            alt='Site Logo'
                            width={isMobile ? '200' : '250'}
                            height={45}
                        />
                    </Link>
                    <Span>
                        <Input
                            type='text'
                            id='search'
                            placeholder='Kelime, galeri no veya ilan adı ile ara'
                            autoComplete='off'
                        />
                    </Span>
                    <Button width={200} primary>
                        ÜCRETSİZ İLAN VER
                    </Button>
                    <Button width={120} shadow>
                        Üye Ol
                    </Button>
                    <Button width={120} shadow>
                        Giriş Yap
                    </Button>
                    <StyledHamburger>
                        <HamburgerMenu toggled={isOpen} toggle={setOpen} rounded direction='left' color='#C9202F' />
                    </StyledHamburger>
                </StyledNavbar>

                {route.pathname === '/' && (
                    <Navigation>
                        <MobileSpan>
                            <MobileInput
                                type='text'
                                id='mobileSearch'
                                placeholder='Kelime, galeri no veya ilan adı ile ara'
                                autoComplete='off'
                            />
                        </MobileSpan>
                        <div className='flex'>
                            <MobileButton big primary>
                                Ücretsiz İlan Ver
                            </MobileButton>
                            <MobileButton shadow>Trink Sat</MobileButton>
                        </div>
                        <NavList>
                            <Card data={CardDatas} />
                            <StyledAdCard>
                                <StyledAdButton primary>
                                    Tüm İlanlar <span className='count'>(250.150)</span>{' '}
                                    <span className='rightOk'>&gt;</span>
                                </StyledAdButton>
                                <StyledAdButton>
                                    Tüm Kategoriler <span className='rightOk'>&gt;</span>
                                </StyledAdButton>
                            </StyledAdCard>
                        </NavList>
                    </Navigation>
                )}
            </NavWrapper>
        </>
    )
}

export default Navbar
