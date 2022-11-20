import { Stack, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useFetchFollowing } from '../../api/useFetchFollowing'
import { useFetchPlaylists } from '../../api/useFetchPlaylists'
import { useFetchUser } from '../../api/useFetchUser'
import { useSpotify } from '../../hooks/useSpotify'
import { makeStyles } from '../../utils/Theme'
import Button from '../Button'
import TopArtistList from '../List/TopArtistList'
import TopTrackList from '../List/TopTrackList'
import Loading from './Loading'
const Dashboard = () => {
    const { data: playlists, isLoading: isLoadingPlaylist } =
        useFetchPlaylists()
    const { data: following, isLoading: isLoadingFollowing } =
        useFetchFollowing()
    const { data: user, isLoading: isLoadingUser } = useFetchUser()
    const { logout } = useSpotify()
    const classes = useStyles()

    if (isLoadingPlaylist || isLoadingFollowing || isLoadingUser)
        return <Loading />
    if (!playlists || !following || !user) return <Loading />
    return (
        <Stack
            className={classes.classes.container}
            alignItems={'center'}
            spacing={4}
        >
            <img
                className={classes.classes.image}
                src={user?.images[0]?.url}
                alt={'user image'}
                loading={'lazy'}
            />
            <Typography className={classes.classes.userName} variant="h3">
                {user?.display_name}
            </Typography>
            <Stack
                direction={'row'}
                spacing={4}
                justifyContent={'space-around'}
            >
                <Stack className={classes.classes.statContainer}>
                    <Typography
                        className={classes.classes.statValue}
                        variant="h5"
                    >
                        {user?.followers.total}
                    </Typography>
                    <Typography
                        className={classes.classes.statHeader}
                        variant="subtitle2"
                    >
                        Followers
                    </Typography>
                </Stack>
                <Stack className={classes.classes.statContainer}>
                    <Typography
                        className={classes.classes.statValue}
                        variant="h5"
                    >
                        {following?.artists?.total
                            ? following.artists.total
                            : 0}
                    </Typography>
                    <Typography
                        className={classes.classes.statHeader}
                        variant="subtitle2"
                    >
                        Following
                    </Typography>
                </Stack>
                <Stack className={classes.classes.statContainer}>
                    <Typography
                        className={classes.classes.statValue}
                        variant="h5"
                    >
                        {playlists ? playlists.items.length : 0}
                    </Typography>
                    <Typography
                        className={classes.classes.statHeader}
                        variant="body2"
                    >
                        Playlists
                    </Typography>
                </Stack>
            </Stack>
            <Button onClick={() => logout && logout()}>Log out</Button>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                className={classes.classes.listContainer}
            >
                <TopArtistList
                    variant={'short_term'}
                    limit={10}
                    isPageView={false}
                />
                <TopTrackList
                    variant={'short_term'}
                    limit={10}
                    isPageView={false}
                />
            </Stack>
        </Stack>
    )
}

export default Dashboard

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    image: {
        borderRadius: 320,
        width: 150,
        height: 150,
    },
    userName: {
        fontWeight: 600,
    },
    statContainer: {
        textAlign: 'center',
    },
    statHeader: {
        fontWeight: 600,
        color: '#818181',
    },
    statValue: {
        color: '#1ed760',
    },
    listContainer: {
        flexDirection: 'row',
        padding: '0 2rem',
        gap: '2rem',
        width: '100%',
    },
}))
