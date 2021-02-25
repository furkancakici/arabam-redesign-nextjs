import SideBar from './SideBar'
import VehicleSection from './VehicleSection'
import { VehicleGrid } from './styles'

const VehicleDetails = () => {
    return (
        <>
            <VehicleGrid>
                <VehicleSection />
                <SideBar />
            </VehicleGrid>
        </>
    )
}

export default VehicleDetails
