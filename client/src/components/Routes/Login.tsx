import { Button, Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '../../utils/Theme'
const Login = () => {
    const classes = useStyles()
    //const LOGIN_URI = 'http://localhost:8888/login'
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
