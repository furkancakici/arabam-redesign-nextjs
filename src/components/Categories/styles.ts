import styled, { keyframes } from 'styled-components'
import { SIZES } from '@assets/styles/GlobalStyles'

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 1200px;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    margin-right: 20px;
    position: relative;

    ${SIZES.tablet} {
        display: none;
    }
`

export const StyledUl = styled.ul`
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
`
export const Rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
  
    75% {
      transform: rotate(350deg) scale(1.2);
    }
  
    100%{
      transform: rotate(360deg) scale(1);
    }
`

export const StyledLi = styled.li`
    display: flex;
    align-items: center;
    border-radius: 30px;
    height: 100%;
    padding-left: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.backgroundColor.lightRed};

        svg {
            animation: ${Rotate} 0.7s;
        }
    }
`

export const StyledImage = styled.span`
    display: flex;
    align-items: center;

    svg {
        width: 30px;
        height: 30px;
        fill: ${({ theme }) => theme.textColor.darkRed};
        transition: ${({ theme }) => theme.fx.transition};
    }
`

export const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    pointer-events: none;
`

export const StyledText = styled.span`
    margin-left: 10px;
    color: ${({ theme }) => theme.textColor.black};
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
`
