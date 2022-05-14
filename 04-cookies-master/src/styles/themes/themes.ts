import { createTheme } from '@mui/material';
import { green, grey, purple, red } from '@mui/material/colors';



export const customTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: red[900]
        },
        secondary: {
            main: green[500]
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c'
                }
            }
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#4a148c'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    }
});