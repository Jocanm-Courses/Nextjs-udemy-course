import Head from 'next/head'
import React from 'react'
import { NavBar } from '../ui';

interface CompProps {
    children: React.ReactNode
    title?: string
}

export const MainLayout = ({ children, title }: CompProps) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jose Luis Angarita" />
                <meta name="description" content={`Información sobre el pokemón ${title}`} />
                <meta name="keywords" content={`${title} xxxx, pokemon, pokedex`} />
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
