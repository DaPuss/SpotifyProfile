import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useLocation, useParams } from 'react-router-dom'
import { useFetchPlaylist } from '../../api/useFetchPlaylist'
import { makeStyles } from '../../utils/Theme'
import PlayListTrackList from '../List/PlayListTrackList'

interface LocationState {
    playlistName: string
}
const Playlist = () => {
    const classes = useStyles().classes

    const { playlistId } = useParams<{ playlistId: string }>()
    const location = useLocation()
    const state = location.state as LocationState
    const { data, isLoading } = useFetchPlaylist(playlistId)

    return (
        <Container className={classes.container}>
            <Container className={classes.headerContainer}>
                <Typography variant="h4">{state.playlistName}</Typography>
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
