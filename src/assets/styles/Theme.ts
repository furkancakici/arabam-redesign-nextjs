import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    interface backColors {
        white: string
        lightGray: string
        lightRed: string
    }

    interface textColors {
        black: string
        darkGray: string
        darkRed: string
        darkGray_2: string
    }

    interface fx {
        shadow: string
        shadow_2: string
        shadow_3: string
        shadow_hover: string
        transition: string
        revShadow: string
    }

    interface DefaultTheme {
        backgroundColor: backColors
        textColor: textColors
        fx: fx
    }
}

export const lightTheme: DefaultTheme = {
    backgroundColor: {
        white: '#FFFFFF',
        lightGray: '#F1F6F9',
        lightRed: '#FAE9EB',
    },
    textColor: {
        black: '#000000',
        darkGray: '#5c5555',
        darkGray_2: '#A5AEB2',
        darkRed: '#C9202F',
    },
    fx: {
        shadow: '1px 5px 10px #d9d9d9',
        shadow_2: '1px 3px 7px #d9d9d9',
        shadow_3: '0px 2px 4px #d9d9d9',
        shadow_hover: '5px 5px 20px #d9d9d9, -5px -5px 20px #d9d9d9',
        revShadow: '-1px -1px 2px #d9d9d9;',
        transition: 'all 0.2s ease-in',
    },
}

export const darkTheme: DefaultTheme = {
    backgroundColor: {
        white: '#0d074d',
        lightGray: '#F1F6F9',
        lightRed: '#FAE9EB',
    },
    textColor: {
        black: '#000000',
        darkGray: '#909090',
        darkGray_2: '#A5AEB2',
        darkRed: '#C9202F',
    },
    fx: {
        shadow: '1px 5px 10px #d9d9d9',
        shadow_2: '1px 3px 7px #d9d9d9',
        shadow_3: '0px 2px 1px #d9d9d9',
        shadow_hover: '5px 5px 20px #d9d9d9, -5px -5px 20px #d9d9d9',
        revShadow: '-1px -1px 2px #d9d9d9;',
        transition: 'all 0.2s ease-in',
    },
}
