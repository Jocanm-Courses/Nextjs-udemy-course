import Head from 'next/head'
import React from 'react'
import { NavBar } from '../ui';

interface CompProps {
    children: React.ReactNode
    title?: string
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export const MainLayout = ({ children, title }: CompProps) => {

    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jose Luis Angarita" />
                <meta name="description" content={`Información sobre el pokemón ${title}`} />
                <meta name="keywords" content={`${title} xxxx, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la información sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />

            <main
                style={{
                    padding: '0 20px',
                }}
            >
                {children}
            </main>
        </>
    )
}
