import { ListItem, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '../../utils/Theme'

function MenuItem({
    text,
    route,
    icon,
}: {
    text: string
    route: string
    icon: React.ReactNode
}) {
    const classes = useStyles().classes

    return (
        <ListItem className={classes.menuItemContainer}>
            <NavLink
                className={({ isActive }) =>
                    `${classes.menuItem} ${
                        isActive ? classes.menuItemActive : undefined
                    }`
                }
                to={route}
            >
                {icon}
                <Typography
                    className={classes.menuItemText}
                    variant="subtitle1"
                >
                    {text}
                </Typography>
            </NavLink>
        </ListItem>
    )
}

export default MenuItem

const useStyles = makeStyles()((theme: Theme) => ({
    menuItemContainer: {
        padding: 0,
    },
    menuItem: {
        backgroundColor: 'black',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        color: '#9b9b9b',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        alignItems: 'center',
        textDecoration: 'none !important',
        '&:hover': {
            border: 'none !important',
            color: 'white',
            backgroundColor: '#181818',
            boxShadow: '20px 0px 20px -20px rgba(30,215,96,0.75) inset',
            '@media screen and (max-width: 600px)': {
                boxShadow: '0px 20px 20px -20px rgba(30,215,96,0.75) inset',
            },
        },
        '&:focus': {
            textDecoration: 'none !important',
        },
    },
    menuItemActive: {
        color: 'white !important',
        backgroundColor: '#181818',
        border: 'none !important',
        boxShadow: '20px 0px 20px -20px rgba(30,215,96,0.75) inset !important',
        '@media screen and (max-width: 600px)': {
            boxShadow:
                '0px 20px 20px -20px rgba(30,215,96,0.75) inset !important',
        },
    },
    menuItemText: {
        fontSize: '11px',
        fontWeight: 600,
        textDecoration: 'none',
    },
}))
