import { FC, useState } from 'react'
import { FooterData } from '@data/index'
import { MainUL } from './styles'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import List from './List'

const TabBar: FC = () => {
    const [primary, setPrimary] = useState(FooterData.primary.tabs)

    return (
        <>
            <Tabs>
                <TabList>
                    {primary.title.map((item, i) => {
                        return <Tab key={i}>{item}</Tab>
                    })}
                </TabList>

                <TabPanel>
                    <MainUL>
                        {primary.items.same.map((item, i) => {
                            return <List key={i} Listitem={item} />
                        })}
                    </MainUL>
                </TabPanel>

                <TabPanel>
                    <MainUL>
                        {primary.items.same.map((item, i) => {
                            return <List key={i} Listitem={item} />
                        })}
                    </MainUL>
                </TabPanel>

                <TabPanel>
                    <MainUL>
                        {primary.items.city.map((item, i) => {
                            return <List key={i} Listitem={item} />
                        })}
                    </MainUL>
                </TabPanel>

                <TabPanel>
                    <MainUL>
                        {primary.items.same.map((item, i) => {
                            return <List key={i} Listitem={item} />
                        })}
                    </MainUL>
                </TabPanel>

                <TabPanel>
                    <MainUL>
                        {primary.items.price.map((item, i) => {
                            return <List key={i} Listitem={item} />
                        })}
                    </MainUL>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default TabBar
