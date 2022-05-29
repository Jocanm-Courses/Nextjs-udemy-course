import React from 'react'
import Head from 'next/head';
import * as M from '@mui/material';

interface Props {
    title: string;
    children: React.ReactNode;
}

export const AuthLayout = ({ title, children }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <M.Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh-200px)">
                    {children}
                </M.Box>
            </main>
        </>
    )
}
