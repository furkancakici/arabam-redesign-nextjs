import styled from 'styled-components'
import { FC } from 'react'
import { SIZES } from '@assets/styles/GlobalStyles'

export const HeaderImg = styled.img.attrs({
    src: '/images/banner.png',
})`
    width: 100%;
    height: 270px;
    border-radius: 20px;
    position: relative;
    margin-bottom: 30px;
    background-size: cover;
    z-index: -1;

    ${SIZES.phone} {
        display: none;
    }
`

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, auto));
    grid-template-rows: auto;
    gap: 20px;
    width: 100%;
    height: 100%;
    margin-bottom: 35px;
`

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    height: 180px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    transition: ${({ theme }) => theme.fx.transition};

    &:hover {
        transform: scale(1.1);
    }

    ${SIZES.phone} {
        display: none;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    line-height: 1.1;
    color: ${({ theme }) => theme.textColor.black};
`

export const StyledImg = styled.span`
    display: flex;
    align-items: center;
    svg {
        width: 30px;
        height: 30px;
        fill: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const CardBody = styled.p`
    color: ${({ theme }) => theme.textColor.darkGray};
`

export const CardLabel = styled.label`
    color: ${({ theme }) => theme.textColor.darkRed};
    cursor: pointer;
    margin-bottom: 10px;
    font-weight: 600;
`
