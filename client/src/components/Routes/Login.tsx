import { Button, Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '../../utils/Theme'
const Login = () => {
    const classes = useStyles()
    //TODO upadte env
    // const LOGIN_URI =
    //     import.meta.env.VITE_SPOTIFY_ENVIRONMENT !== 'production'
    //         ? 'http://localhost:8888/login'
    //         : 'https://dyl-spotify-app.herokuapp.com/login'

    const LOGIN_URI = 'https://dyl-spotify-app.herokuapp.com/login'

    return (
        <Container className={classes.classes.container}>
            <Typography className={classes.classes.bold} variant="h4">
                Spotify Profile
            </Typography>
            <Button href={LOGIN_URI}>
                <Typography
                    className={classes.classes.bold}
                    variant="subtitle1"
                >
                    LOG IN TO SPOTIFY
                </Typography>
            </Button>
        </Container>
    )
}

export default Login

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh !important',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    bold: {
        fontWeight: 600,
    },
}))
