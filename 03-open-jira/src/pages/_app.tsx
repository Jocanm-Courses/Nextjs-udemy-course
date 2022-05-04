import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { EntriesProvider } from '../context/entries'
import { UiProvider } from '../context/ui'
import '../styles/globals.css'
import { darkTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UiProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UiProvider>
        </EntriesProvider>
    )
}

export default MyApp
