import { CssBaseline, ThemeProvider } from '@mui/material'
import NextProgress from 'next-progress'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { EntriesProvider } from '../context/entries'
import { UiProvider } from '../context/ui'
import '../styles/globals.css'
import { darkTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SnackbarProvider maxSnack={3}>
            <EntriesProvider>
                <UiProvider>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                        <NextProgress delay={300} options={{ showSpinner: false }} />
                    </ThemeProvider>
                </UiProvider>
            </EntriesProvider>
        </SnackbarProvider>
    )
}

export default MyApp
