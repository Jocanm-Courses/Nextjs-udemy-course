import '../src/styles/globals.css';
import type { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { customTheme, darkTheme, lightTheme } from '../src/styles/themes';
import { CssBaseline, Theme } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

interface ExtendedApp extends AppProps {
    theme: string
}

function MyApp({ Component, pageProps, theme = "light" }: ExtendedApp) {

    const [currentTheme, setCurrentTheme] = useState(lightTheme)

    useEffect(() => {
        const frontTheme = Cookies.get("theme") || "dark";

        const selectedTheme: Theme = (frontTheme === "light")
            ? lightTheme
            : (frontTheme === "dark")
                ? darkTheme
                : customTheme
        setCurrentTheme(selectedTheme)
    }, [])


    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

// MyApp.getInitialProps = async ({ ctx }: AppContext) => {

//     // const { theme = "light" } = (ctx.req as any).cookies || {}

//     //@ts-ignore
//     const { theme = "light" } = (ctx.req?.cookies) || {}

//     const validtThemes = ["light", "dark", "custom"]

//     return {
//         theme: validtThemes.includes(theme) ? theme : "dark"
//     }

// }

export default MyApp
