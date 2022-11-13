import { Button, Typography } from '@mui/material'
import { makeStyles } from '../utils/Theme'

interface Props {
    buttonText: string
    active: boolean
    setFilter: () => void
}
const FilterButton = ({ buttonText, active, setFilter }: Props) => {
    const classes = useStyles().classes

    return (
        <Button onClick={() => setFilter()} className={classes.sortButton}>
            <Typography
                className={`${classes.sortText} ${
                    active && classes.activeText
                } `}
            >
                {buttonText}
            </Typography>
        </Button>
    )
}

export default FilterButton

const useStyles = makeStyles()({
    sortText: {
        border: 'none !important',
        fontWeight: 600,
        fontSize: 16,
        '@media screen and (max-width: 600px)': { fontSize: 14 },
        color: '#9b9b9b',
        '&:hover': {
            color: 'white',
        },
    },
    activeText: {
        color: 'white',
        textDecoration: 'underline',
    },
    sortButton: {
        background: 'transparent',
        border: 'none',
        padding: 0,
        '@media screen and (min-width: 850px)': { padding: '1rem' },
        '&:hover': {
            background: 'transparent',
        },
    },
})
