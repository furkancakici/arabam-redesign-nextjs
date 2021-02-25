import { FC, useState } from 'react'
import List from './List'
import AppButtons from './AppButtons'
import SocialButtons from './SocialButtons'
import { FooterData } from '@data/index'
import {
    First,
    Second,
    Third,
    Fourth,
    SideBar,
    Title,
    UL,
    Main,
    GrayBackColor,
    SvgApp,
    SvgSocial,
    StyledText,
    DIV,
    SocialText,
    FooterContainer,
} from './styles'
import TabBar from './TabBar'
import Companies from './Companies'
import { Wrapper } from '@assets/styles/GlobalStyles'

const Footer: FC = () => {
    const [primary, setPrimary] = useState<any>(FooterData.primary.side)
    const [secondary, setSecondary] = useState<any>(FooterData.secondary)
    const [tertiary, setTertiary] = useState<any>(FooterData.tertiary)

    const year = new Date().getFullYear()

    return (
        <>
            <FooterContainer>
                <GrayBackColor>
                    <Wrapper>
                        <First>
                            <SideBar>
                                <Title>
                                    <span>{primary.title}</span>{' '}
                                    <span> &gt; </span>
                                </Title>
                                <UL>
                                    {primary.items.map(
                                        (item: any, i: number) => {
                                            return (
                                                <List key={i} Listitem={item} />
                                            )
                                        }
                                    )}
                                </UL>
                            </SideBar>
                            <Main>
                                <TabBar />
                            </Main>
                        </First>
                    </Wrapper>
                </GrayBackColor>

                <Wrapper>
                    <Second>
                        <SvgApp>
                            {secondary.app.map((item: any, i: number) => {
                                return (
                                    <AppButtons
                                        key={i}
                                        src={item.src}
                                        PlatName={item.PlatName}
                                        href={item.href}
                                    />
                                )
                            })}
                        </SvgApp>

                        <StyledText>
                            <p> Müşteri Hizmetleri</p>
                            <span>
                                <a href="tel:08507599000">0 850 759 90 00</a>
                            </span>
                        </StyledText>
                        <span>
                            <SocialText>Sosyal Medya</SocialText>
                            <SvgSocial>
                                {secondary.social.map(
                                    (item: any, i: number) => {
                                        return (
                                            <SocialButtons
                                                key={i}
                                                src={item.src}
                                                href={item.href}
                                            />
                                        )
                                    }
                                )}
                            </SvgSocial>
                        </span>
                    </Second>
                </Wrapper>

                <GrayBackColor>
                    <Wrapper>
                        <Third>
                            <p className="year">
                                {`© 2000-${year}`} arabam.com
                            </p>
                            <div className="right">
                                <p>Ziyaretçi Aydınlatma Metni</p>
                                <p>Kişisel Verilerin Korunması</p>
                            </div>
                        </Third>
                    </Wrapper>
                </GrayBackColor>

                <Fourth>
                    <DIV>
                        <p>
                            arabam.com{' '}
                            <img src={tertiary.img_href} alt="Firma Logo" />{' '}
                            iştirakidir.
                        </p>
                    </DIV>
                    <div className="comp">
                        {tertiary.companies.map((item: any, i: number) => {
                            return (
                                <Companies
                                    key={i}
                                    href={item.href}
                                    text={item.text}
                                />
                            )
                        })}
                    </div>
                </Fourth>
            </FooterContainer>
        </>
    )
}

export default Footer
