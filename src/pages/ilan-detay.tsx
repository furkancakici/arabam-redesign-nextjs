import { NextPage } from 'next'
import { Wrapper } from '@assets/styles/GlobalStyles'
import NextHead from '@components/NextHead'
import { VehicleDetails } from '@components/index'
import { useEffect } from 'react'

const AdDetail: NextPage = () => {
    useEffect(() => {
        console.clear()
    }, [])

    return (
        <>
            <NextHead title="Araç Detayları" />

            <Wrapper>
                <VehicleDetails />
            </Wrapper>
        </>
    )
}

export default AdDetail
