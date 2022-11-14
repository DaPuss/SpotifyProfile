import { makeStyles } from '../../utils/Theme'

const Loading = () => {
    const classes = useStyles().classes
    return <div className={classes.container}>Loading...</div>
}

export default Loading

const useStyles = makeStyles()(() => ({
    container: {
        minWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
}))
