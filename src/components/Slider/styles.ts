import styled from 'styled-components'
import { SIZES } from '@assets/styles/GlobalStyles'
import Image from 'next/image'

export const MainSliderContainer = styled.div`
    .swiper-button-next,
    .swiper-button-prev {
        display: none;
    }
`

export const CardContainer = styled.section`
    display: flex;
    margin-bottom: 35px;
    width: 100%;

    ${SIZES.desktop} {
        display: block;
        margin-bottom: 50px;
    }

    ${SIZES.xldesktop} {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 0 0 30%;
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    width: 370px;
    height: 500px;
    border-radius: 15px;
    margin-bottom: 30px;
    margin-left: 5px;

    ${SIZES.tablet} {
        width: 90%;
        margin-left: 20px;
        margin-right: 16px;
    }
`

export const StyledImg = styled(Image)`
    border-radius: 15px;
    margin-top: 15px;
`

export const CardTitle = styled.span`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor.black};
    line-height: 1.2;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`

export const CardBody = styled.p`
    color: ${({ theme }) => theme.textColor.darkGray};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    padding: 2px 15px;
    line-height: 1.2;
`

export const CardLabel = styled.a`
    color: ${({ theme }) => theme.textColor.darkRed};
    font-weight: bold;
    margin-bottom: 35px;
`

export const H2 = styled.h2`
    color: ${({ theme }) => theme.textColor.darkRed};
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;

    ${SIZES.phone} {
        margin-bottom: 0px;
        font-size: 20px;
        margin-right: 115px;
    }
`

export const Label = styled.h3`
    display: none;

    ${SIZES.phone} {
        display: block;
        font-size: 15px;
        margin-top: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const P = styled.p`
    color: ${({ theme }) => theme.textColor.darkGray};
    text-align: center;
    max-width: 300px;
    line-height: 1.6;

    ${SIZES.phone} {
        display: none;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const Justify = styled.div`
    ${SIZES.phone} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const CustomButton = styled.div`
    font-size: 40px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;

    svg,
    svg * {
        fill: ${({ theme }) => theme.textColor.darkRed};
    }

    &:active {
        transform: scale(0.9);
    }

    ${SIZES.phone} {
        display: none;
    }
`

export const CustomPagination = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${SIZES.phone} {
        position: relative;
        top: 535px;
        left: 0px;
    }

    .swiper-pagination-bullet {
        width: 30px;
        height: 10px;
        background-color: ${({ theme }) => theme.backgroundColor.lightRed};
        margin-right: 15px;
        cursor: pointer;
        border-radius: 3px;
        transition: ${({ theme }) => theme.fx.transition};
        opacity: 1 !important;
        color: transparent;

        &:last-child {
            margin-right: 0px;
        }
    }

    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.textColor.darkRed};
    }
`
