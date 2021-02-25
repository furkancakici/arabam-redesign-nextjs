import { SIZES } from '@assets/styles/GlobalStyles'
import styled from 'styled-components'
import Image from 'next/image'

export const VehicleGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(700px, 820px) 1fr;

    ${SIZES.tablet} {
        grid-template-columns: minmax(700px, 750px) 0fr;
    }

    ${SIZES.phone} {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`

export const StyledVehicleSection = styled.div`
    max-width: 825px;

    ${SIZES.phone} {
        width: 100%;
        max-width: 350px;
    }
`

export const MobileVehicleName = styled.h3`
    display: none;

    ${SIZES.phone} {
        display: block;
        color: ${({ theme }) => theme.textColor.darkRed};
        font-size: 20px;
        text-align: center;
        transform: translateY(25px);
        font-weight: bold;
    }
`

export const VehicleName = styled.h2`
    margin-top: 45px;
    margin-bottom: 35px;
    font-weight: bold;
    font-size: 29px;

    ${SIZES.tablet} {
        font-size: 26px;
    }

    ${SIZES.phone} {
        font-size: 22px;
        text-transform: lowercase;
        text-align: center;
        line-height: 1.4;
    }
`

export const AdSliderWrapper = styled.div`
    max-width: 100%;
    margin-bottom: 35px;

    .VehicleSlider {
        ${SIZES.phone} {
            width: 380px;
        }

        ${SIZES.smphone} {
            width: 370px;
            transform: translateX(-15px);
        }
        .swiper-wraper {
            transform-origin: 30% 50% -145px !important;
        }

        .swiper-cube-shadow {
            opacity: 0.4;
        }

        .swiper-button-next,
        .swiper-button-prev {
            width: 40px;
            height: 40px;
            color: #fff;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: inset 0px 53px 2px rgb(201 32 47 / 14%);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
            font-size: 22px;
        }

        .swiper-pagination-bullet-active {
            background-color: #f1475b;
        }
    }

    //thumbsnail

    .vehicleThumbsnail {
        ${SIZES.phone} {
            width: 390px;
        }

        ${SIZES.smphone} {
            width: 350px;
        }

        .swiper-slide-visible,
        .swiper-slide-active {
            opacity: 0.9;

            &.swiper-slide-thumb-active {
                opacity: 1;
                margin-left: 2px;
                filter: drop-shadow(0px 3px 1px rgb(201, 32, 47));
            }
        }

        .swiper-button-next,
        .swiper-button-prev {
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(20px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
            font-size: 32px;
            font-weight: bold;
        }

        .swiper-wrapper {
            margin-top: 15px;
        }
    }
`

type CardProps = {
    long?: boolean
    clicked?: boolean
}

export const CardWrapper = styled.div<CardProps>`
    width: minmax(680px, 780px);
    height: ${({ long }) => (long ? '1150px' : '350px')};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    padding: 20px 25px 35px;
    border-radius: 20px;
    margin-bottom: 65px;

    .MobileList {
        display: none;
    }

    ${SIZES.phone} {
        width: 95%;
        height: ${({ long }) => (long ? '309px' : '785px')};
        border-bottom-left-radius: ${({ clicked }) => clicked && '0px'};
        border-bottom-right-radius: ${({ clicked }) => clicked && '0px'};
        /* margin-right:9px; */

        .MobileList {
            display: block;
        }

        .MainList {
            display: none;
        }
    }

    ${SIZES.smphone} {
        width: 84%;
    }

    &:last-child {
        /* margin-bottom:165px; */
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        margin: 25px 0 25px 10px;

        &.title {
            font-size: 19px;
            margin-bottom: 40px !important;
        }
    }

    .red-color {
        color: #c9202f;
    }

    .listGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        ${SIZES.phone} {
            grid-template-columns: 1fr;
            gap: 4px;
        }
    }

    .labelBold {
        font-weight: bold;
    }

    .textCenter {
        font-weight: bold;
    }

    ul {
        margin: 10px 0;

        &.singleList {
            display: none;
        }

        li {
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid;
            border-bottom-color: #a5aeb2;
            padding-bottom: 7px;
            margin-bottom: 15px;

            &.fuelSection {
                grid-template-columns: 1fr 0.5fr;
            }

            &:last-child {
                border: none;

                ${SIZES.phone} {
                    border-bottom: 1px solid;
                    border-bottom-color: #a5aeb2;
                }
            }
        }
    }
`

export const DetailTabsContainer = styled.div`
    .react-tabs__tab-list {
        width: minmax(680px, 780px);
        margin-bottom: 35px;
        border-radius: 50px;
        border-bottom: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: ${({ theme }) => theme.backgroundColor.white};
        box-shadow: ${({ theme }) => theme.fx.shadow};
        padding: 7px;

        .react-tabs__tab {
            font-weight: bold;
            font-size: 18px;
            color: ${({ theme }) => theme.textColor.darkRed};
            background-color: inherit;
            border: none;
            padding: 20px;
            border-radius: 50px;
            transition: ${({ theme }) => theme.fx.transition};

            ${SIZES.phone} {
                padding: 15px 10px;
            }

            &.react-tabs__tab--selected {
                background-color: ${({ theme }) =>
                    theme.textColor.darkRed} !important;
                color: ${({ theme }) => theme.backgroundColor.white} !important;
            }
        }
    }
`

export const MobileButton = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 25px;
    color: ${({ theme }) => theme.backgroundColor.white};
    background-color: ${({ theme }) => theme.textColor.darkRed};
    text-align: center;

    &:active {
        transform: scale(0.98);
    }
`

export const MobileContainer = styled.div<{ clicked?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 70px;
    background-color: ${({ theme }) => theme.textColor.darkGray_2};
    margin-top: ${({ clicked }) => (clicked ? '17px' : '23px')};
    margin-left: -30px;
    opacity: 1;
`

export const MobileSubButton = styled.button<{ short?: boolean }>`
    width: ${({ short }) => (short ? '60px' : '110px')};
    height: 50px;
    background-color: ${({ short, theme }) =>
        short ? theme.textColor.darkRed : theme.backgroundColor.lightGray};
    border-radius: 5px;
    font-weight: 600;
    margin-right: 10px;

    svg {
        font-size: 22px;
        fill: ${({ short, theme }) =>
            short ? theme.backgroundColor.white : theme.textColor.black};
    }

    &:first-child {
        margin-left: 10px;
    }

    &:active {
        transform: scale(0.98);
    }
`

export const EmptyTabs = styled.div`
    width: minmax(680px, 780px);
    height: 500px;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 30px;
    margin-right: 9px;

    ${SIZES.phone} {
        height: 400px;
    }

    h2 {
        font-weight: bold;
        font-size: 22px;
        color: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 900px;
    position: relative;

    ${SIZES.tablet} {
        display: none;
    }
`

export const VehicleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 766px;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    border-radius: 25px;
    margin-top: 15px;
`

export const Content = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Favorite = styled.button`
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    height: 35px;
    width: 300px;
    border-radius: 25px;
    margin-bottom: 7px;
    cursor: pointer;
    font-weight: 600;

    &:last-child {
        margin-bottom: 15px;
    }

    &:active {
        transform: scale(0.97);
    }
`

export const VehiclePrice = styled.h2`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    border-radius: 25px;
    color: ${({ theme }) => theme.textColor.darkRed};
    font-weight: bold;
    padding: 10px 20px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 8px;
    width: 75%;
`

export const CustomerName = styled.h2`
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.darkRed};
    cursor: pointer;
    margin-bottom: 20px;
`

export const SubContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .badge {
        width: 47%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.textColor.darkRed};
        color: ${({ theme }) => theme.backgroundColor.white};
        border-radius: 25px;
        margin-left: 2px;
        font-size: 15px;
        padding: 0 2px;
    }

    .adContent {
        display: block !important;
        font-size: 13px;
        margin-left: 5px;
        color: ${({ theme }) => theme.textColor.darkRed};
        cursor: pointer;

        &:after {
            content: '→';
            margin-left: 2px;
        }
    }
`

export const VehicleCard = styled.div<{ query?: boolean; mobile?: boolean }>`
    box-shadow: ${({ theme }) => theme.fx.shadow};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: 85%;
    height: ${({ query }) => (query ? '70px' : '280px')};
    border-radius: 25px;
    margin-bottom: 15px;
    padding: 15px;

    ${SIZES.phone} {
        width: 90%;
        height: ${({ query }) => (query ? '80px' : '280px')};
        background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    }

    .dmgQuery {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;

        ${SIZES.phone} {
            margin-top: 10px;
        }
    }
`

export const ContentBox = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    .svgIcon {
        padding: 6px;
        fill: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const QueryInput = styled.input`
    background-color: inherit;
    width: 45%;
    padding: 4px 8px;
    margin-right: 10px;
    border-radius: 20px;
    border: 1px solid #ddd !important;
`

export const QueryButton = styled.button`
    color: ${({ theme }) => theme.backgroundColor.white};
    background-color: ${({ theme }) => theme.textColor.darkRed};
    font-weight: 600;
    padding: 7px;
    border-radius: 25px;
    margin-left: 5px;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }
`

export const Complain = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: 95%;
    height: 35px;
    padding: 5px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 30px;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }

    span {
        margin-right: 10px;

        svg {
            fill: ${({ theme }) => theme.textColor.darkRed};
            width: 20px;
            height: 20px;
            padding-top: 7px;
        }
    }

    ${SIZES.phone} {
        box-shadow: none;
        border: 1px solid ${({ theme }) => theme.textColor.darkRed};
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`

export const Button = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }

    span {
        margin-bottom: 15px;
    }

    svg {
        fill: ${({ theme }) => theme.textColor.darkRed};
        width: 25px;
        height: 25px;
    }
`

export const MobileBreadcumb = styled.h3`
    display: none;

    ${SIZES.phone} {
        display: block;
        color: ${({ theme }) => theme.textColor.darkGray};
    }
`
