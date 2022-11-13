import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '../../utils/Theme'
import UserPlaylistList from '../List/UserPlaylistList'

const UserPlaylists = () => {
    const classes = useStyles().classes

    return (
        <Container className={classes.container}>
            <Container className={classes.headerContainer}>
                <Typography variant="h4">Playlists</Typography>
            </Container>
            <Container className={classes.listContainer}>
                <UserPlaylistList />
            </Container>
        </Container>
    )
}
const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        minWidth: '75vw',
    },
    filterContainer: { marginLeft: '20rem' },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2rem',
    },
    listContainer: {},
}))
export default UserPlaylists
