import { FC, useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    Navigation,
    Pagination,
    EffectCube,
    Thumbs,
    Lazy,
} from 'swiper'
import { AdSliderWrapper } from './styles'
import Image from 'next/image'

SwiperCore.use([Navigation, Pagination, EffectCube, Thumbs, Lazy])

const ProductSlider: FC<any> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    return (
        <>
            <AdSliderWrapper>
                <div className="VehicleSlider">
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        effect="cube"
                        lazy={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        grabCursor={true}
                    >
                        {images.map((item, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={item}
                                    alt={`Slider Img - ${i}`}
                                    width={820}
                                    height={600}
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="vehicleThumbsnail">
                    <Swiper
                        spaceBetween={1}
                        onSwiper={setThumbsSwiper}
                        navigation
                        watchSlidesVisibility
                        watchSlidesProgress
                        grabCursor={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                            },
                            480: {
                                slidesPerView: 5,
                            },
                            992: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        {images.map((item, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={item}
                                    alt={`Thumbsnail - ${i}`}
                                    width={106}
                                    height={120}
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </AdSliderWrapper>
        </>
    )
}

export default ProductSlider
