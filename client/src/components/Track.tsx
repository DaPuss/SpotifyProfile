import { Container, Stack, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import { useFetchTrack } from '../api/useFetchTrack'
import { useFetchTrackAnalysis } from '../api/useFetchTrackAnalysis'
import { useFetchTrackFeatures } from '../api/useFetchTrackFeatures'
import { makeStyles } from '../utils/Theme'
import Loading from './Routes/Loading'
import TrackFeatureTable from './TrackFeatureTable'

const Track = () => {
    const { trackId } = useParams<string>()

    const { data: trackFeatures, isLoading: isTrackFeaturesLoading } =
        useFetchTrackFeatures(trackId)
    const { data: trackAnalysisData, isLoading: trackAnalysLoading } =
        useFetchTrackAnalysis(trackId)
    const { data: trackData, isLoading: trackLoading } = useFetchTrack(trackId)
    const classes = useStyles().classes

    const isLoading =
        isTrackFeaturesLoading || trackAnalysLoading || trackLoading
    const hasData = !!trackFeatures && !!trackAnalysisData && !!trackData

    if (isLoading || !hasData) return <Loading />

    const artists = trackData.artists.map((artist) => artist.name).join(', ')
    return (
        <Container className={classes.container}>
            <Container className={classes.topContainer}>
                <img
                    className={classes.coverImage}
                    src={trackData?.album.images[0]?.url}
                />
                <Stack gap={0.5} paddingLeft={2}>
                    <Typography variant="h4" className={classes.bold}>
                        {trackData.name}
                    </Typography>
                    <Typography
                        variant="h5"
                        className={`${classes.text} ${classes.bold}`}
                    >
                        {artists}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.text}>
                        {trackData.album.name} &#9679;{' '}
                        {trackData.album.release_date}
                    </Typography>
                    <a
                        href={trackData.external_urls.spotify}
                        target="_blank "
                        className={classes.link}
                    >
                        Open on Spotify
                    </a>
                </Stack>
            </Container>
            <TrackFeatureTable
                trackData={trackData}
                trackFeatures={trackFeatures}
                trackAnalysisData={trackAnalysisData}
            />
        </Container>
    )
}

export default Track

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        minWidth: '90vw !important',
        maxWidth: '100vw !important',
        display: 'flex',
        gap: '4rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        width: 150,
        height: 150,
    },
    genereBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        color: '#818181',
    },
    bold: {
        fontWeight: 600,
    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#1DB954',
        fontWeight: 600,
        padding: '0.5rem 2rem',
        borderRadius: '2rem',
        '&:hover': {
            backgroundColor: '#1ed760',
        },
    },
}))
