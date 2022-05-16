import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
    title?: string
    children: React.ReactNode
    pageDescription?: string
    imageUrl?: string
}

export const ShopLayout: FC<Props> = ({ title = "Teslo Shop", children, imageUrl, pageDescription }) => {



    return (
        <>

            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {imageUrl && <meta name="og:image" content={imageUrl} />}
            </Head>

            <Navbar />

            {/* TODO: sidebar */}

            <main style={{
                margin: "80px auto",
                maxWidth: "1440px",
                padding: "0 30px"
            }}>
                {children}
            </main>

            <footer>
                {/* TODO: custom footer */}
            </footer>

        </>
    )
}
