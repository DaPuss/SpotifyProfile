import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useLocation, useParams } from 'react-router-dom'
import { useFetchPlaylist } from '../../api/useFetchPlaylist'
import { makeStyles } from '../../utils/Theme'
import PlayListTrackList from '../List/PlayListTrackList'

const Playlist = () => {
    const classes = useStyles().classes

    const { playlistId } = useParams<string>()
    const location = useLocation()
    const { data, isLoading } = useFetchPlaylist(playlistId)

    return (
        <Container className={classes.container}>
            <Container className={classes.headerContainer}>
                <Typography variant="h4">
                    {location.state.playlistName}
                </Typography>
            </Container>
            <Container className={classes.listContainer}>
                <PlayListTrackList playlistData={data} isLoading={isLoading} />
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
export default Playlist
