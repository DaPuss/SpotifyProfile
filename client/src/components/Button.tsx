import { Button as MuiButton } from '@mui/material'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { makeStyles } from '../utils/Theme'
const Button = ({
    className,
    variant = 'secondary',
    onClick,
    children,
}: {
    className?: string
    variant?: 'primary' | 'secondary'
    onClick?: () => void
    children: React.ReactNode
}) => {
    const classes = useStyles()
    const btnClass =
        variant === 'primary'
            ? classes.classes.primary
            : classes.classes.secondary
    return (
        <MuiButton className={`${className} ${btnClass}`} onClick={onClick}>
            {children}
        </MuiButton>
    )
}

export default Button

const useStyles = makeStyles()((theme: Theme) => ({
    primary: {
        color: 'white',
        backgroundColor: '#1DB954',
        fontWeight: 600,
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        '&:hover': {
            backgroundColor: '#1ed760',
        },
    },
    secondary: {
        border: '1px solid white',
        color: 'white',
        backgroundColor: '#181818',
        fontWeight: 600,
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        '&:hover': {
            backgroundColor: 'white',
            color: '#181818',
            border: '1px solid white',
        },
    },
}))
