import {
    Avatar,
    ListItem,
    ListItemAvatar,
    Tooltip,
    Typography,
} from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { Artist } from '../../../api/types'
import { makeStyles } from '../../../utils/Theme'

const ArtistListItem = ({
    item,
    isGrid = true,
}: {
    item: Artist
    isGrid?: boolean
}) => {
    const classes = useStyles().classes
    const navigate = useNavigate()

    return (
        <ListItem
            className={classes.container}
            onClick={() => navigate(`/artist/${item.id}`)}
        >
            <Tooltip title={item.name}>
                <ListItemAvatar
                    children={
                        <>
                            <Avatar
                                className={
                                    isGrid
                                        ? classes.avatarGrid
                                        : classes.avatarList
                                }
                                src={item?.images[0]?.url}
                            />
                            {isGrid && (
                                <Typography
                                    className={classes.gridText}
                                    variant="body2"
                                    textAlign={'center'}
                                >
                                    {item.name}
                                </Typography>
                            )}
                        </>
                    }
                />
            </Tooltip>
            {!isGrid && (
                <Typography className={classes.text} variant="body1">
                    {item.name}
                </Typography>
            )}
        </ListItem>
    )
}

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        gap: '2rem',
        cursor: 'pointer',
        '&:hover': {
            color: '#1ed760',
            '& .MuiAvatar-circular': {
                boxShadow: '0 0 10px  #1ed760',
            },
        },
    },
    avatarList: {
        alignItems: 'center',
        gap: '4rem',
        width: 60,
        height: 60,
    },
    avatarGrid: {
        alignItems: 'center',
        gap: '4rem',
        width: 150,
        height: 150,
    },
    gridText: {
        fontWeight: 600,
        paddingTop: '1rem',
    },
    text: {
        fontWeight: 600,
    },
}))

export default ArtistListItem
