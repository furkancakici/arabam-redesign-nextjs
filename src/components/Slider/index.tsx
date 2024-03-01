import Card from './Card'
import { FC, useRef } from 'react'
import {
    CardContainer,
    H2,
    P,
    Content,
    CustomButton,
    CustomPagination,
    Flex,
    Justify,
    Label,
    MainSliderContainer
} from './styles'
import { TestData, NewsData } from '@data/index'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

const Slider: FC = () => {
    const prevRef = useRef<any>(null)
    const nextRef = useRef<any>(null)

    return (
        <>
            <MainSliderContainer>
                <CardContainer>
                    <Content>
                        <Justify>
                            <H2>{TestData.content.title}</H2>
                            <P>{TestData.content.body}</P>
                            <Label>{TestData.content.label}</Label>
                        </Justify>
                        <Flex>
                            <CustomButton ref={prevRef}>{TestData.content.svg_2}</CustomButton>
                            <CustomPagination className='pagin' />
                            <CustomButton ref={nextRef}>{TestData.content.svg_1}</CustomButton>
                        </Flex>
                    </Content>
                    <Swiper
                        navigation={{
                            prevEl: prevRef.current ? prevRef.current : undefined,
                            nextEl: nextRef.current ? nextRef.current : undefined
                        }}
                        onInit={(swiper: any) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                            swiper.navigation.update()
                        }}
                        pagination={{
                            el: '.pagin',
                            type: 'bullets',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + '.' + '</span>'
                            }
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 1
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 1
                            },
                            992: {
                                slidesPerView: 2.5,
                                spaceBetween: 80
                            }
                        }}>
                        {TestData.data.map((data, i) => (
                            <SwiperSlide key={i}>
                                <Card key={i} src={data.src} title={data.title} body={data.body} label={data.label} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardContainer>

                <CardContainer>
                    <Content>
                        <Justify>
                            <H2>{NewsData.content.label}</H2>
                            <P>{NewsData.content.body}</P>
                            <Label>{TestData.content.label}</Label>
                        </Justify>

                        <Flex>
                            <CustomButton ref={prevRef}>{TestData.content.svg_2}</CustomButton>
                            <CustomPagination className='paginn' />
                            <CustomButton ref={nextRef}>{TestData.content.svg_1}</CustomButton>
                        </Flex>
                    </Content>
                    <Swiper
                        navigation={{
                            prevEl: prevRef.current ? prevRef.current : undefined,
                            nextEl: nextRef.current ? nextRef.current : undefined
                        }}
                        onInit={(swiper: any) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                            swiper.navigation.update()
                        }}
                        pagination={{
                            el: '.paginn',
                            type: 'bullets',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + '.' + '</span>'
                            }
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 1
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 1
                            },
                            992: {
                                slidesPerView: 2.5,
                                spaceBetween: 80
                            }
                        }}>
                        {NewsData.data.map((data, i) => (
                            <SwiperSlide key={i}>
                                <Card key={i} src={data.src} title={data.title} body={data.body} label={data.label} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardContainer>
            </MainSliderContainer>
        </>
    )
}

export default Slider
