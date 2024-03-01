import GlobalStyle from '@assets/styles/GlobalStyles'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@assets/styles/Theme'
import { Layout } from '@components/index'
import 'swiper/swiper-bundle.css'
import 'react-tabs/style/react-tabs.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false)
    useEffect(() => {
        setShowChild(true)
    }, [])
    if (!showChild) {
        return null
    }
    if (typeof window === 'undefined') {
        return <></>
    } else {
        return (
            <>
                <ThemeProvider theme={lightTheme}>
                    <Head>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                        <link
                            rel='preload'
                            href='/fonts/Poppins/Poppins-Regular.ttf'
                            as='font'
                            type='font/ttf'
                            crossOrigin='anonymous'
                        />
                        <link rel='apple-touch-icon' sizes='180x180' href='/ico/apple-touch-icon.png' />
                        <link rel='icon' type='image/png' sizes='32x32' href='/ico/favicon-32x32.png' />
                        <link rel='icon' type='image/png' sizes='16x16' href='/ico/favicon-16x16.png' />
                        <link rel='manifest' href='/ico/site.webmanifest' />
                        <link rel='mask-icon' href='/ico/safari-pinned-tab.svg' color='#5bbad5' />
                        <meta name='msapplication-TileColor' content='#da532c' />
                        <meta name='theme-color' content='#ffffff' />
                    </Head>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </>
        )
    }
}

export default MyApp
