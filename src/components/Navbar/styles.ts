import styled from 'styled-components'
import { SIZES } from '@assets/styles/GlobalStyles'
import Image from 'next/image'

export const NavWrapper = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    background-color: inherit;

    ${SIZES.phone} {
        padding-left: 0px;
        padding-right: 0px;
    }
`

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-top: 5px;
    padding-bottom: 15px;

    ${SIZES.phone} {
        box-shadow: ${({ theme }) => theme.fx.shadow_3};
    }
`

export const StyledImgLogo = styled(Image)`
    ${SIZES.phone} {
        margin-left: 16px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
`

export const Span = styled.span`
    width: 400px;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    padding-right: 20px;
    padding-left: 40px;
    border-radius: 25px;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;

    &::after {
        content: url('images/icons/21.svg');
        position: absolute;
        top: 15px;
        left: 16px;
        width: 16px;
        height: 16px;
    }

    ${SIZES.phone} {
        display: none;
    }

    ${SIZES.tablet} {
        width: 155px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    margin-bottom: 30px;

    > button {
        :first-child {
            margin-left: -35px;

            ${SIZES.tablet} {
                margin-left: 0px;
            }
        }
    }
`

type BtnProps = {
    big?: boolean
    primary?: boolean
    shadow?: boolean
    width?: number
    mb?: number
}
// 200 120 250
export const Button = styled.button<BtnProps>`
    width: ${(props) => props.width}px;
    height: 45px;
    border-radius: 25px;
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: ${(props) => props.mb}px;
    background-color: ${(props) =>
        props.primary
            ? props.theme.textColor.darkRed
            : props.theme.backgroundColor.white};
    color: ${(props) =>
        props.primary
            ? props.theme.backgroundColor.white
            : props.theme.textColor.darkRed};
    box-shadow: ${(props) =>
        props.shadow ? props.theme.fx.shadow : undefined};
    font-weight: bold;
    letter-spacing: 0.4px;
    cursor: pointer;

    &:active {
        transform: scale(0.97);
    }

    ${SIZES.phone} {
        display: none;
    }
`

export const StyledHamburger = styled.div`
    display: none;
    ${SIZES.phone} {
        position: fixed;
        top: 19px;
        right: 19px;
        display: block;
        background-color: #fff;
        box-shadow: ${({ theme }) => theme.fx.shadow};
        border-radius: 50%;
        z-index: 10;
    }
`

export const Navigation = styled.nav`
    display: none; // ###

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
    }

    ${SIZES.phone} {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 800px;
        background-color: ${({ theme }) => theme.backgroundColor.white};
    }
`

export const NavList = styled.ul`
    width: 100%;
    li {
        margin-bottom: 15px;
        padding-right: 16px;
        padding-left: 16px;
    }
`

// Mobile

export const MobileSpan = styled.span`
    width: 280px;
    height: 45px;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    padding-right: 20px;
    padding-left: 40px;
    border-radius: 25px;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    margin-bottom: 20px;

    &::after {
        content: url('images/icons/21.svg');
        position: absolute;
        top: 12px;
        left: 16px;
        width: 16px;
        height: 16px;
    }
`

export const MobileInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
`

export const MobileButton = styled.button<BtnProps>`
    width: ${(props) => (props.big ? '180' : '130')}px;
    height: 45px;
    border-radius: 25px;
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
    background-color: ${(props) =>
        props.primary
            ? props.theme.textColor.darkRed
            : props.theme.backgroundColor.white};
    color: ${(props) =>
        props.primary
            ? props.theme.backgroundColor.white
            : props.theme.textColor.darkRed};
    box-shadow: ${(props) =>
        props.shadow ? props.theme.fx.shadow : undefined};
    font-weight: bold;
    letter-spacing: 0.4px;
    cursor: pointer;

    &:active {
        transform: scale(0.97);
    }

    ${SIZES.phone} {
        /* display:none; */
    }
`

// Mobile Card Style

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    height: 55px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-left: 15px;
    svg {
        width: 40px;
        height: 40px;
        fill: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const CardBody = styled.p`
    color: ${({ theme }) => theme.textColor.darkGray};
`

export const CardLabel = styled.label`
    color: ${({ theme }) => theme.textColor.darkRed};
    cursor: pointer;
    font-weight: 600;
    display: block;
    margin-right: 25px;
    font-size: 30px;
`

export const StyledAdCard = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    height: 200px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`

type AdProps = {
    primary?: boolean
}

export const StyledAdButton = styled.button<AdProps>`
    width: 96%;
    height: 55px;
    border-radius: 15px;
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
    padding-left: 15px;
    margin-bottom: 2px;
    font-weight: bold;
    letter-spacing: 0.4px;
    font-size: 19px;
    cursor: pointer;
    color: ${(props) =>
        props.primary
            ? props.theme.textColor.darkRed
            : props.theme.textColor.black};
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};

    display: flex;
    align-items: center;
    position: relative;

    .rightOk {
        position: absolute;
        top: 13px;
        right: 32px;
        font-size: 30px;
    }

    .count {
        color: ${({ theme }) => theme.textColor.darkGray};
        font-size: 11px;
        margin-top: 2px;
        margin-left: 10px;
    }
`
