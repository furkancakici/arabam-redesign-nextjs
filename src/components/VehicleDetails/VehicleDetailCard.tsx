import { FC, useState } from 'react'
import {
    CardWrapper,
    VehicleCard,
    QueryInput,
    QueryButton,
    Complain,
} from './styles'
import { VehicleSample } from '@data/index'

const VehicleDetailCard: FC<any> = ({ details }) => {
    const [sideContent, setSideContent] = useState<any>(
        VehicleSample.sidebarDetails
    )

    return (
        <>
            <CardWrapper>
                <div className="MainList">
                    <h2>
                        {details?.map((item) =>
                            item.label === 'İlan Adresi' ? item.text : undefined
                        )}
                    </h2>
                    <div className="listGrid">
                        <ul>
                            {details
                                ?.slice(0, 8)
                                .filter((item) => item.label !== 'İlan Adresi')
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
                            {details
                                ?.slice(8, 15)
                                .filter((item) => item.label !== 'İlan Adresi')
                                .map((item, i) => (
                                    <li key={i}>
                                        <span className="labelBold">
                                            {item.label}
                                            {`:`}
                                        </span>
                                        <span className="textCenter">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="MobileList">
                    <ul>
                        <li>
                            <span className="labelBold">Fiyat {`:`} </span>{' '}
                            <span className="textCenter red-color">
                                292.500 TL
                            </span>
                        </li>
                        {details
                            ?.slice(0, 15)
                            .filter((item) => item.label !== 'İlan Adresi')
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
                    <VehicleCard query mobile>
                        <h2 className="dmgQuery">Hasar Sorgulama</h2>
                        <QueryInput type="text" placeholder="Örn 985254" />
                        <QueryButton>Sorgula</QueryButton>
                    </VehicleCard>
                    <Complain>
                        <span>{sideContent.iconSvg_3}</span>Satıcıyı / İlanı
                        Şikayet Et
                    </Complain>
                </div>
            </CardWrapper>
        </>
    )
}

export default VehicleDetailCard
