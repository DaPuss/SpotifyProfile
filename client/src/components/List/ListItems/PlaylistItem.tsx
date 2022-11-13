import { ListItem, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Playlist } from '../../../api/types'
import { makeStyles } from '../../../utils/Theme'

const PlaylistItem = ({ item }: { item: Playlist }) => {
    const classes = useStyles().classes
    const navigate = useNavigate()

    const getName = (name: string | undefined): string | undefined => {
        if (!name) return

        return name.length > 25 ? `${name.substring(0, 25)}...` : name
    }
    return (
        <ListItem
            className={classes.container}
            onClick={() =>
                navigate(`/playlist/${item.id}`, {
                    state: {
                        playlistName: item.name
                            ? item.name
                            : 'Unnamed Playlist',
                    },
                })
            }
        >
            <Tooltip title={item.name} placement="left">
                <img src={item.images[0].url} className={classes.image} />
            </Tooltip>
            <Typography className={classes.title} variant="body1">
                {getName(item?.name)}
            </Typography>
            <Typography className={classes.totalTracks} variant="body2">
                {item?.tracks.total} Tracks
            </Typography>
        </ListItem>
    )
}

const useStyles = makeStyles()({
    container: {
        flexDirection: 'column',
        cursor: 'pointer',
        color: '#9b9b9b',
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
        width: 200,
        height: 200,
    },
    titleContainer: {
        padding: '0 !important',
        display: 'flex',
        flexDirection: 'row',
    },
    title: { fontWeight: 600, color: 'white', paddingTop: 4 },
    totalTracks: {},
    subtitle: { color: '#9b9b9b' },
})

export default PlaylistItem
