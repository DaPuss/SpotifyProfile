import type { EmotionCache } from '@emotion/cache'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import {
    createTheme,
    CssBaseline,
    ThemeOptions,
    ThemeProvider,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { createMakeAndWithStyles } from 'tss-react'

export const SpotifyTheme: ThemeOptions = {
    palette: {
        background: {
            default: '#181818',
            paper: '#424242',
        },
        mode: 'dark',
        primary: {
            main: '#191414',
        },
        secondary: {
            main: '#191414',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#1DB954',
                    fontWeight: 600,
                    padding: '0.5rem 2rem',
                    borderRadius: '2rem',
                    '&:hover': {
                        backgroundColor: '#1ed760',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': {
                    fontFamily: 'Circular',
                },
            },
        },
    },
}

export const { makeStyles, withStyles } = createMakeAndWithStyles({
    useTheme,
})

let muiCache: EmotionCache | undefined = undefined

export const createMuiCache = () =>
    createCache({
        key: 'mui',
        prepend: true,
    })

interface Props {
    children: ReactNode
}

const Theme = (props: Props) => {
    const { children } = props

    return (
        <CacheProvider value={muiCache || createMuiCache()}>
            <ThemeProvider theme={createTheme(SpotifyTheme)}>
                <CssBaseline />

                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default Theme
