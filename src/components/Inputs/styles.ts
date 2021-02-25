import { SIZES } from '@assets/styles/GlobalStyles'
import styled from 'styled-components'

export const StyledSelectInput = styled.div`
    display: flex;
    ${SIZES.phone} {
        display: none;
    }
`

export const StyledCategoryInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    ${SIZES.phone} {
        display: none;
    }
`

export const StyledSelect = styled.span`
    width: 150px;
    margin-right: 15px;
    z-index: 20;

    ${SIZES.tablet} {
        margin-right: 7px;
    }

    .css-1wa3eu0-placeholder {
        color: #000 !important;
        font-weight: 700;
    }

    .css-yk16xz-control,
    .css-1pahdxg-control {
        border-radius: 15px;
        padding-left: 3px;
        border: none;
        background-color: ${({ theme }) => theme.backgroundColor.white};
        box-shadow: ${({ theme }) => theme.fx.shadow};
    }

    .css-1uccc91-singleValue {
        padding: 5px !important;
        font-weight: 700;
    }

    .css-1okebmr-indicatorSeparator {
        display: none;
    }

    //Clicked
    .css-9gakcf-option {
        background-color: ${({ theme }) => theme.textColor.darkRed};
        border-radius: 15px;
    }

    //Hover
    .css-1n7v3ny-option,
    .css-1n7v3ny-option:active {
        background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    }

    .css-1hb7zxy-IndicatorsContainer,
    .css-1gtu0rj-indicatorContainer {
        svg {
            fill: ${({ theme }) => theme.textColor.darkRed};
        }
    }
`

export const StyledCategorySelect = styled.span<{ width?: number }>`
    width: ${({ width }) => width}px;
    z-index: 20;

    .css-1wa3eu0-placeholder {
        font-weight: 700;
    }

    .css-yk16xz-control,
    .css-1pahdxg-control {
        border-radius: 15px;
        padding-left: 3px;
        border: none;
        background-color: ${({ theme }) => theme.backgroundColor.white};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.textColor.darkGray_2} !important;
        border: 1px solid #c4c4c4 ${({ theme }) => theme.textColor.darkGray_2};
        margin-bottom: 10px;
    }

    .css-1uccc91-singleValue {
        font-weight: 700;
    }

    .css-1okebmr-indicatorSeparator {
        display: none;
    }

    //Clicked
    .css-9gakcf-option {
        background-color: ${({ theme }) => theme.textColor.darkRed};
        border-radius: 15px;
    }

    //Hover
    .css-1n7v3ny-option,
    .css-1n7v3ny-option:active {
        background-color: ${({ theme }) => theme.backgroundColor.lightGray};
    }

    .css-1hb7zxy-IndicatorsContainer,
    .css-1gtu0rj-indicatorContainer {
        svg {
            fill: ${({ theme }) => theme.textColor.darkRed};
        }
    }
`
