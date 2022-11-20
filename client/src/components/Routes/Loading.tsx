import { CircularProgress } from '@mui/material'
import { makeStyles } from '../../utils/Theme'

const Loading = () => {
    const classes = useStyles().classes
    return (
        <div className={classes.container}>
            <CircularProgress color="success" />
        </div>
    )
}

export default Loading

const useStyles = makeStyles()(() => ({
    container: {
        minWidth: '50vw',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
