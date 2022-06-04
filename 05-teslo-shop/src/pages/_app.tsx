import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import { SWRConfig } from 'swr'
import { AuthProvider, CartProvider, UiProvider } from '../context'
import NextProgress from 'next-progress'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: (url, init) => fetch(url, init).then((r) => r.json()),
            }}
        >
            <AuthProvider>
                <CartProvider>
                    <UiProvider>
                        <ThemeProvider theme={lightTheme}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </UiProvider>
                </CartProvider>
            </AuthProvider>
            <NextProgress delay={300} options={{ showSpinner: false }} />
        </SWRConfig>
    )
}

export default MyApp
