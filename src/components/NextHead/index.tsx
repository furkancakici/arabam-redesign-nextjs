import Head from 'next/head'
import { FC } from 'react'

type Props = {
    title: string
}

const NextHead: FC<Props> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={`${title} Arabam.com Redesign - Next Js`}
                />
                <meta
                    name="keywords"
                    content={`Arabam.com, Next Js, Styled Components`}
                />
            </Head>
        </>
    )
}

export default NextHead
