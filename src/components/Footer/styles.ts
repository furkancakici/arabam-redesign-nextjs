import { SIZES, Wrapper } from '@assets/styles/GlobalStyles'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin-top: 55px;
    margin-bottom: 20px;
`

export const First = styled(Wrapper)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 50px 0;

    ${SIZES.tablet} {
        display: flex;
        padding: 20px 0;
        margin: 0 15px;
        border-bottom: 1px solid #a5aeb2;
    }
`

export const SideBar = styled.div`
    width: 100%;
    height: 100%;
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textColor.darkRed};

    span + span {
        display: none;
    }

    ${SIZES.tablet} {
        margin-bottom: 0px;
        display: flex;
        justify-content: space-between;
        span + span {
            display: block;
            margin-right: 25px;
        }
    }
`

export const GrayBackColor = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.lightGray};

    ${SIZES.tablet} {
        background-color: ${({ theme }) => theme.backgroundColor.white};
    }
`

export const UL = styled.ul`
    width: 100%;

    ${SIZES.tablet} {
        display: none;
    }
`

export const MainUL = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px 15px;
`

export const LI = styled.li`
    width: 100%;
    font-size: 22px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        text-decoration-color: #c9202f !important;
        text-decoration: dotted underline;
        text-decoration-thickness: 2.7px;
    }
`

export const Main = styled.div`
    width: 100%;
    height: 100%;

    ${SIZES.tablet} {
        display: none;
    }

    .react-tabs {
        .react-tabs__tab {
            color: ${({ theme }) => theme.textColor.darkRed};
            font-weight: bold;
            padding: 30px 24px;
            font-size: 22px;
            transition: all 0.15s ease-in;
            border: none;
        }

        .react-tabs__tab:focus,
        .react-tabs__tab:checked {
            box-shadow: 0 0 5px #c9202f;
            border-color: #c9202f;
        }

        .react-tabs__tab-list {
            margin: 0;
            border: none;
        }

        .react-tabs__tab-panel {
            padding: 30px 20px;
            height: 220px;
            border-radius: 5px;
            background-color: ${({ theme }) => theme.backgroundColor.white};
            box-shadow: ${({ theme }) => theme.fx.shadow_2};
        }

        .react-tabs__tab--selected {
            box-shadow: ${({ theme }) => theme.fx.revShadow};
        }
    }
`

export const Second = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    width: 100%;
    height: 80px;

    ${SIZES.tablet} {
        justify-content: space-between;
        height: 300px;
        flex-direction: column;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    margin-right: 10px;
    color: ${({ theme }) => theme.textColor.darkGray_2};

    filter: grayscale(100%);

    &:hover {
        filter: grayscale(0%);
        color: ${({ theme }) => theme.textColor.darkRed};
    }

    &:last-child {
        margin-right: 0px;
    }
`

export const AppCard = styled.div`
    ${SIZES.tablet} {
        width: 105px;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 3px;
        box-shadow: ${({ theme }) => theme.fx.shadow};
    }
`

export const StyledSpan = styled.span`
    display: flex;
    ${SIZES.tablet} {
        flex-direction: column;
    }
`

export const SocialText = styled.h3`
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor.darkGray_2};
    display: none;

    ${SIZES.tablet} {
        display: block;
        margin-top: 25px;
    }
`

export const SvgApp = styled.span`
    display: flex;

    ${SIZES.tablet} {
        order: 2;
    }
`
export const SvgSocial = styled.span`
    display: flex;

    ${SIZES.tablet} {
        order: 1;

        span {
            display: block;
        }
    }
`

export const Icon = styled.span`
    ${SIZES.tablet} {
        text-align: center;
    }
    svg {
        width: 30px;
        height: 30px;
        fill: ${({ theme }) => theme.textColor.darkRed};
    }

    svg * {
        width: 100%;
        height: 100%;
    }
`

export const StyledDIV = styled.div`
    margin-left: 10px;

    h2 {
        font-weight: bold;
    }

    h4 {
        display: none;
    }

    ${SIZES.tablet} {
        margin-left: 0px;

        h3 {
            display: none;
        }

        h4 {
            display: block;
            text-align: center;
            font-size: 15px;
        }
    }
`
export const StyledH2 = styled.h2`
    font-weight: bold;

    ${SIZES.tablet} {
        font-size: 12px;
        margin: 7px 0;
    }
`

export const StyledText = styled.h2`
    margin: 0 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor.darkGray_2};
    text-align: center;

    p {
        font-size: 20px;
        margin-bottom: 15px;
    }

    ${SIZES.tablet} {
        order: 3;
        width: 240px;
        font-size: 25px;
    }

    span {
        font-weight: bold;
    }

    &:hover {
        color: ${({ theme }) => theme.textColor.darkRed};
    }
`

export const Third = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    width: 100%;
    height: 80px;
    color: ${({ theme }) => theme.textColor.darkGray_2};

    p:hover {
        color: ${({ theme }) => theme.textColor.darkRed};
        cursor: pointer;
        font-weight: bold;
    }

    p:first-child {
        margin-right: 20px;
    }

    ${SIZES.tablet} {
        height: 60px;
    }

    .right {
        display: flex;
        ${SIZES.tablet} {
            display: none;
        }
    }

    ${SIZES.tablet} {
        justify-content: center;
    }
`

export const Fourth = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    width: 100%;
    height: 80px;

    .comp {
        display: flex;

        div {
            margin-right: 15px;
        }
    }

    ${SIZES.tablet} {
        justify-content: center;
        background-color: ${({ theme }) => theme.backgroundColor.lightGray};

        .comp {
            display: none;
        }
    }
`

export const DIV = styled.div`
    display: flex;
    cursor: pointer;
    font-weight: bold;

    img {
        width: 60px;
        height: 34px;
        margin: 0 10px;
        transition: all 0.1s ease-in;
        transform: translateY(5px);

        &:hover {
            transform: translateY(5px) scale(1.07);
        }
    }
`

export const A = styled.a`
    font-size: 13px;
`
export const StyledComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    transition: all 0.1s ease-in;

    &:hover {
        transform: scale(1.08);
    }
`
