import { Container } from '@mui/material'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { makeStyles } from '../utils/Theme'
import NavBar from './Nav/NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const classes = useStyles().classes

    return (
        <Container className={classes.container}>
            <NavBar />
            <main
                style={{
                    display: 'flex',
                }}
            >
                {children}
            </main>
        </Container>
    )
}

export default Layout

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        paddingLeft: '100px !important',
        '@media screen and (max-width: 600px)': {
            paddingLeft: '0 !important',
            paddingBottom: '70 !important',
        },
    },
}))
