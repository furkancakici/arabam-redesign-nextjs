import styled from 'styled-components'
import Image from 'next/image'
import { SIZES } from '@assets/styles/GlobalStyles'

export const FlexTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.textColor.darkRed};
    font-weight: bold;
`

export const ShowCaseTitle = styled.h2`
    font-size: 40px;
`

export const Label = styled.h3`
    font-size: 18px;
    margin-top: 5px;
    cursor: pointer;

    &::after {
        content: '→';
        margin-left: 5px;
    }
`

export const StyledWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, auto));
    gap: 10px;
    margin-bottom: 65px;
`

export const StyledWrapperDetail = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 210px));
    gap: 10px;
    margin-bottom: 65px;

    ${SIZES.phone} {
        grid-template-columns: repeat(2, minmax(165px, 200px));
    }
`

export const StyledSvgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;

    svg {
        display: none;
        fill: #fff;
        font-size: 30px;
    }
`

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.fx.shadow};
    height: 200px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: ${({ theme }) => theme.fx.transition};
    position: relative;

    img {
        height: 110px;
    }

    :hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background-color: #000;
        opacity: 0.6;
    }

    :hover {
        ${StyledSvgContainer} {
            svg {
                display: block;
            }
        }
    }
`

export const StyledSideCategoryDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 920px;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    border-radius: 25px;
    padding: 20px;

    ${SIZES.tablet} {
        display: none;
    }
`

export const SideContent = styled.div<{ height?: number }>`
    padding: 10px;
    max-width: 100%;
    height: ${({ height }) => height}px;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    border-radius: 15px;
    margin-bottom: 15px;

    h2 {
        color: ${({ theme }) => theme.textColor.darkRed};
        font-weight: 700;
        margin-bottom: 10px;
    }

    .justify-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
`
export const StyledSpan = styled.span<{ clicked?: boolean }>`
    transform: ${({ clicked }) =>
        clicked
            ? 'translateY(-5px) rotate(-90deg)'
            : 'translateY(-5px) rotate(90deg)'};
    color: ${({ theme }) => theme.textColor.darkRed};
    font-size: 20px;
    font-weight: bold;

    &.bottom {
        transform: translateY(-5px) rotate(-90deg);
    }
`
export const StyledInput = styled.input<{ width?: number }>`
    width: ${({ width }) => width}px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    border: 1px solid ${({ theme }) => theme.textColor.darkGray_2} !important;
    padding: 0 10px;
    margin-right: 5px;
`

export const StyledCollapse = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;

    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 17px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #fae9eb;
        border-radius: 50%;
    }

    .container:hover input ~ .checkmark {
        background-color: #fae0ea;
    }

    .container input:checked ~ .checkmark {
        background-color: #c9202f;
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }
`

export const StyledInputs = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StyledImg = styled(Image)`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transition: ${({ theme }) => theme.fx.transition};
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.span`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor.black};
`

export const Date = styled.span`
    font-size: 13px;
`

export const CardBody = styled.p`
    color: ${({ theme }) => theme.textColor.darkGray};
`

export const CardLabel = styled.a`
    color: ${({ theme }) => theme.textColor.darkRed};
    font-weight: bold;
    margin-bottom: 5px;
`
