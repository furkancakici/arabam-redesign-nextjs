import { useState } from 'react'
import {
    VehicleName,
    StyledVehicleSection,
    MobileVehicleName,
    MobileBreadcumb,
} from './styles'
import { SelectInput } from '@components/Inputs'
import { VehicleSample } from '@data/index'
import ProductSlider from './ProductSlider'
import VehicleDetailCard from './VehicleDetailCard'
import DetailTabs from './DetailTabs'

const VehicleSection = () => {
    const [sampleVehicle, setSampleVehicle] = useState(VehicleSample)
    return (
        <>
            <StyledVehicleSection>
                <SelectInput />
                <MobileBreadcumb>
                    Volkswagen {`>`} Passat {`>`} 1.6 TDi {`>`} Comfortline{' '}
                </MobileBreadcumb>
                <MobileVehicleName>Alpergün Otomotiv</MobileVehicleName>
                <VehicleName>{sampleVehicle.title}</VehicleName>
                <ProductSlider images={sampleVehicle.images} />
                <VehicleDetailCard details={sampleVehicle.details} />
                <DetailTabs />
            </StyledVehicleSection>
        </>
    )
}

export default VehicleSection
