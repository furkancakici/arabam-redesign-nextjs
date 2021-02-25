import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import VehicleDetailCardLong from './VehicleDetailCardLong'
import { DetailTabsContainer, EmptyTabs } from './styles'
import { useMediaQuery } from 'react-responsive'

const DetailTabs = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
    const isNotMobile = useMediaQuery({ query: '(min-width: 576px)' })

    return (
        <>
            <DetailTabsContainer>
                <Tabs>
                    <TabList>
                        <Tab>
                            {isMobile ? 'Teknik Özellikler 💥' : 'Açıklama'}
                        </Tab>
                        <Tab>Boya-Değişen</Tab>
                        {isMobile ? undefined : (
                            <>
                                <Tab>Araç Bilgileri 💥</Tab>
                                <Tab>Donanım</Tab>
                                <Tab>Kredi</Tab>
                            </>
                        )}
                    </TabList>

                    <TabPanel>
                        {isMobile && <VehicleDetailCardLong />}
                        {isNotMobile && (
                            <>
                                <EmptyTabs>
                                    <h2>AÇIKLAMA 📢</h2>
                                </EmptyTabs>
                            </>
                        )}
                    </TabPanel>

                    <TabPanel>
                        <EmptyTabs>
                            <h2>BOYA-DEĞİŞEN ♻</h2>
                        </EmptyTabs>
                    </TabPanel>
                    {isMobile ? undefined : (
                        <>
                            <TabPanel>
                                <VehicleDetailCardLong />
                            </TabPanel>

                            <TabPanel>
                                <EmptyTabs>
                                    <h2>DONANIM ⚙</h2>
                                </EmptyTabs>
                            </TabPanel>

                            <TabPanel>
                                <EmptyTabs>
                                    <h2>KREDİ 🚧</h2>
                                </EmptyTabs>
                            </TabPanel>
                        </>
                    )}
                </Tabs>
            </DetailTabsContainer>
        </>
    )
}

export default DetailTabs
