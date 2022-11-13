import { Container, ListItem, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Track } from '../../../api/types'
import { makeStyles } from '../../../utils/Theme'

const TrackListItem = ({ item }: { item: Track }) => {
    const classes = useStyles().classes
    const navigate = useNavigate()
    const artists = item.artists.map((artist) => artist.name).join(', ')

    const millisToMinutesAndSeconds = (millis: number) => {
        var minutes = Math.floor(millis / 60000)
        var seconds = (millis % 60000) / 1000
        return seconds == 60
            ? minutes + 1 + ':00'
            : minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
    }
    return (
        <ListItem
            className={classes.container}
            onClick={() => navigate(`/track/${item.id}`)}
        >
            <Tooltip title={item.name}>
                <img src={item.album.images[0].url} className={classes.image} />
            </Tooltip>
            <Container>
                <Container className={classes.titleContainer}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography
                        className={`${classes.bodyText} ${classes.duration}`}
                        variant="body1"
                    >
                        {millisToMinutesAndSeconds(item.duration_ms)}
                    </Typography>
                </Container>

                <Typography className={classes.bodyText} variant="body1">
                    {artists} &#183; {item.album.name}
                </Typography>
            </Container>
        </ListItem>
    )
}

const useStyles = makeStyles()({
    container: {
        flexDirection: 'row',
        cursor: 'pointer',
        color: '#9b9b9b',
        '& h6': {
            fontWeight: 600,
            color: 'white',
        },
        '&:hover': {
            '& h6, p': {
                color: '#1ed760 !important',
            },
            '& img': {
                boxShadow: '0 0 10px  #1ed760',
            },
        },
    },
    image: {
        width: 60,
        height: 60,
    },
    titleContainer: {
        padding: '0 !important',
        display: 'flex',
        flexDirection: 'row',
    },
    duration: { marginLeft: 'auto' },
    bodyText: {
        fontSize: 16,
        '@media screen and (max-width: 900px)': { fontSize: 14 },
    },
})

export default TrackListItem
