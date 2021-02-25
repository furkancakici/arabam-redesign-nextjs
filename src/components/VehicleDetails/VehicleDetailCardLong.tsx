import { FC, useEffect, useState } from 'react'
import { VehicleSample } from '@data/index'
import {
    CardWrapper,
    MobileButton,
    MobileContainer,
    MobileSubButton,
} from './styles'
import { useMediaQuery } from 'react-responsive'

const VehicleDetailCardLong: FC = () => {
    const [sampleVehicle, setSampleVehicle] = useState<any>(
        VehicleSample.tabs.tabLabels
    )
    const [sampleSvg, setSampleSvg] = useState<any>(
        VehicleSample.sidebarDetails
    )
    const isMobile: any = useMediaQuery({ query: '(max-width: 576px)' })
    const [value, setValue] = useState<number>(5)
    const [clicked, setClicked] = useState<boolean>(false)

    const handleChange = () => {
        setValue(value == 5 ? 7 : 5)
        setClicked(!clicked)
    }

    return (
        <>
            <CardWrapper long clicked={clicked}>
                {isMobile ? undefined : (
                    <>
                        <h2 className="title">
                            Galeriden Volkswagen Passat 1.6 TDi BlueMotion
                            Highline 2015 Model İzmir 109.000 km Gri
                        </h2>
                        <h2 className="red-color">
                            {sampleVehicle.first.title}
                        </h2>
                    </>
                )}

                {isMobile ? (
                    <>
                        <ul>
                            {sampleVehicle.first.labels
                                ?.slice(0, value)
                                .map((item, i) => (
                                    <li key={i}>
                                        <span className="labelBold">
                                            {item.label}
                                            {`:`}
                                        </span>{' '}
                                        <span className="textCenter">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                        <MobileButton onClick={handleChange}>
                            Tüm Teknik Özellikleri Göster
                        </MobileButton>
                        <MobileContainer clicked={clicked}>
                            <MobileSubButton>Ara</MobileSubButton>
                            <MobileSubButton>Mesaj Gönder</MobileSubButton>
                            <MobileSubButton short>
                                {sampleSvg.iconSvg_4}
                            </MobileSubButton>
                            <MobileSubButton short>
                                {sampleSvg.iconSvg_6}
                            </MobileSubButton>
                        </MobileContainer>
                    </>
                ) : (
                    <>
                        <div className="listGrid">
                            <ul>
                                {sampleVehicle.first.labels
                                    ?.slice(0, 7)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>{' '}
                                            <span className="textCenter">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                            <ul>
                                {sampleVehicle.first.labels
                                    ?.slice(7, 15)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>
                                            {item.text}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </>
                )}

                {isMobile ? undefined : (
                    <>
                        <h2 className="red-color">
                            {sampleVehicle.second.title}
                        </h2>
                        <div className="listGrid">
                            <ul>
                                {sampleVehicle.second.labels
                                    ?.slice(0, 5)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>{' '}
                                            <span className="textCenter">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                            <ul>
                                {sampleVehicle.second.labels
                                    ?.slice(5, 9)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>
                                            {item.text}
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <h2 className="red-color">
                            {sampleVehicle.third.title}
                        </h2>
                        <div className="listGrid">
                            <ul>
                                {sampleVehicle.third.labels
                                    ?.slice(0, 2)
                                    .map((item, i) => (
                                        <li key={i} className="fuelSection">
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>{' '}
                                            <span className="textCenter">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                            <ul>
                                {sampleVehicle.third.labels
                                    ?.slice(2, 4)
                                    .map((item, i) => (
                                        <li key={i} className="fuelSection">
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>
                                            {item.text}
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <h2 className="red-color">
                            {sampleVehicle.fourth.title}
                        </h2>
                        <div className="listGrid">
                            <ul>
                                {sampleVehicle.fourth.labels
                                    ?.slice(0, 5)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>{' '}
                                            <span className="textCenter">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                            <ul>
                                {sampleVehicle.fourth.labels
                                    ?.slice(5, 9)
                                    .map((item, i) => (
                                        <li key={i}>
                                            <span className="labelBold">
                                                {item.label}
                                                {`:`}
                                            </span>
                                            {item.text}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </>
                )}
            </CardWrapper>
        </>
    )
}

export default VehicleDetailCardLong
