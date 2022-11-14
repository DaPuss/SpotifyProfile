import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { Track, TrackAnalysis, TrackFeatures } from '../api/types'
import { millisToMinutesAndSeconds } from '../utils/millisToMinutesAndSeconds'
import { makeStyles } from '../utils/Theme'

const TrackFeatureTable = ({
    trackData,
    trackFeatures,
    trackAnalysisData,
}: {
    trackData: Track
    trackFeatures: TrackFeatures
    trackAnalysisData: TrackAnalysis
}) => {
    const classes = useStyles().classes
    const TableCell = ({
        title,
        content,
    }: {
        title: string
        content: string | number
    }) => {
        return (
            <Container className={classes.tableCell}>
                <Typography variant={'h4'} className={classes.text}>
                    {content}
                </Typography>
                <Typography variant={'h6'} className={classes.text}>
                    {title}
                </Typography>
            </Container>
        )
    }
    return (
        <Container className={classes.tableContainer}>
            <TableCell
                title={'Duration'}
                content={millisToMinutesAndSeconds(trackFeatures.duration_ms)}
            />
            <TableCell title={'Key'} content={trackFeatures.key} />
            <TableCell
                title={'Modality'}
                content={trackFeatures.mode === 1 ? 'Major' : 'Minor'}
            />
            <TableCell
                title={'Signature'}
                content={trackFeatures.time_signature}
            />
            <TableCell title={'BPM'} content={trackFeatures.tempo} />
            <TableCell
                title={'Popularity'}
                content={`${trackData.popularity}%`}
            />
            <TableCell title={'Bars'} content={trackAnalysisData.bars.length} />
            <TableCell
                title={'Beats'}
                content={trackAnalysisData.beats.length}
            />
            <TableCell
                title={'Sections'}
                content={trackAnalysisData.sections.length}
            />
            <TableCell
                title={'Segments'}
                content={trackAnalysisData.segments.length}
            />
        </Container>
    )
}

export default TrackFeatureTable

const useStyles = makeStyles()((theme: Theme) => ({
    text: {
        color: '#818181',
        fontWeight: 600,
        whiteSpace: 'nowrap',
    },
    tableContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        '@media (max-width: 1500px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
        },
        '@media (max-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
        },
        '@media (max-width: 900px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(5, 1fr)',
        },
        '@media (max-width: 650px)': {
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
        },
    },
    tableCell: {
        padding: '2rem 4rem !important',
        border: '1px solid #818181',
        color: '#818181',
        textAlign: 'center',
    },
}))
