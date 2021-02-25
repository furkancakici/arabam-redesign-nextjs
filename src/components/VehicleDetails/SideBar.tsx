import { useState, useEffect, useRef } from 'react'
import {
    StyledSideBar,
    Favorite,
    VehicleCard,
    VehiclePrice,
    VehicleWrapper,
    Content,
    ContentBox,
    CustomerName,
    SubContent,
    QueryInput,
    QueryButton,
    Complain,
    Buttons,
    Button,
} from './styles'
import { VehicleSample } from '@data/index'

const SideBar = () => {
    const [sideContent, setSideContent] = useState<any>(
        VehicleSample.sidebarDetails
    )

    const sideBarRef = useRef<any>(null)

    const HandleSideScroll = () => {
        if (window.scrollY >= 450 && window.scrollY <= 1399) {
            sideBarRef.current.style.top = `${scrollY - 100}px`
        } else if (window.scrollY >= 1400 && window.scrollY <= 2053) {
            sideBarRef.current.style.top = '1170px'
        } else {
            sideBarRef.current.style.top = '0px'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', HandleSideScroll)

        return () => window.removeEventListener('scroll', HandleSideScroll)
    }, [])

    return (
        <>
            <StyledSideBar ref={sideBarRef}>
                {sideContent.favouriteLabel.map((item, i) => {
                    return (
                        <Favorite key={i} onClick={() => console.log('test')}>
                            {item.label}
                        </Favorite>
                    )
                })}

                <VehicleWrapper>
                    <Content className="content">
                        <VehiclePrice>{sideContent.price}</VehiclePrice>
                        <VehicleCard>
                            <Content>
                                <CustomerName>
                                    {sideContent.customerName}
                                </CustomerName>
                                <ContentBox>
                                    <span className="svgIcon">
                                        {sideContent.iconSvg}
                                    </span>
                                    {sideContent.customerNo}
                                </ContentBox>
                                <ContentBox>
                                    <span className="svgIcon">
                                        {sideContent.iconSvg_2}
                                    </span>
                                    Satıcıya Soru Sor
                                </ContentBox>
                            </Content>
                            <SubContent>
                                <h3 className="badge">
                                    {sideContent.customerFeature}
                                </h3>
                                <h3 className="adContent">Tüm İlanlarını</h3>
                            </SubContent>
                        </VehicleCard>

                        <VehicleCard query>
                            <h2 className="dmgQuery">Hasar Sorgulama</h2>
                            <QueryInput type="text" placeholder="Örn 985254" />
                            <QueryButton>Sorgula</QueryButton>
                        </VehicleCard>

                        <Complain>
                            <span>{sideContent.iconSvg_3}</span>Satıcıyı / İlanı
                            Şikayet Et
                        </Complain>

                        <Buttons>
                            <Button>
                                <span>{sideContent.iconSvg_4}</span>Favori
                            </Button>
                            <Button>
                                <span>{sideContent.iconSvg_5}</span>Karşılaştır
                            </Button>
                            <Button>
                                <span>{sideContent.iconSvg_6}</span>Paylaş
                            </Button>
                        </Buttons>
                    </Content>
                </VehicleWrapper>
            </StyledSideBar>
        </>
    )
}

export default SideBar
