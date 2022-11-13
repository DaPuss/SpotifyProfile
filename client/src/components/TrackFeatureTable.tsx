import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useFetchTrackFeatures } from '../api/useFetchTrackFeatures'
import { makeStyles } from '../utils/Theme'
import Loading from './Routes/Loading'

const TrackFeatureTable = ({ trackId }: { trackId: string | undefined }) => {
    const classes = useStyles().classes
    const { data: trackFeatures, isLoading: isTrackFeaturesLoading } =
        useFetchTrackFeatures(trackId)
    if (!trackFeatures || isTrackFeaturesLoading) return <Loading />

    return (
        <Container className={classes.tableContainer}>
            <Container className={classes.tableRowContainer}>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.duration_ms}</Typography>
                    <Typography>Duration</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.key}</Typography>
                    <Typography>Key</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.mode}</Typography>
                    <Typography>Modality</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.time_signature}</Typography>
                    <Typography>Time Signature</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.tempo}</Typography>
                    <Typography>Tempo (BPM)</Typography>
                </Container>
            </Container>
            <Container className={classes.tableRowContainer}>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.duration_ms}</Typography>
                    <Typography>Popularity</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.key}</Typography>
                    <Typography>Bars</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.key}</Typography>
                    <Typography>Beats</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.key}</Typography>
                    <Typography>Sections</Typography>
                </Container>
                <Container className={classes.tableCell}>
                    <Typography>{trackFeatures.key}</Typography>
                    <Typography>Segments</Typography>
                </Container>
            </Container>
        </Container>
    )
}

export default TrackFeatureTable

const useStyles = makeStyles()((theme: Theme) => ({
    text: {
        color: '#818181',
    },
    bold: {
        fontWeight: 600,
    },
    tableContainer: {},
    tableRowContainer: {
        display: 'flex',
        padding: '0 !important',
    },
    tableCell: {
        padding: '2rem 4rem !important',
        display: 'inline-block',
        border: '1px solid #818181',
        color: '#818181',
    },
}))
