import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '../../utils/Theme'
import RecentTracksList from '../List/RecentTracksList'

const RecentTracks = () => {
    const classes = useStyles().classes

    return (
        <Container className={classes.container}>
            <Container className={classes.headerContainer}>
                <Typography variant="h4">Recent Tracks</Typography>
            </Container>
            <Container className={classes.listContainer}>
                <RecentTracksList isPageView={true} limit={50} />
            </Container>
        </Container>
    )
}
const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        minWidth: '75vw',
    },
    filterContainer: { marginLeft: 'auto' },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2rem',
    },
    listContainer: {},
}))
export default RecentTracks
