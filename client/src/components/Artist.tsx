import { Avatar, Container, Stack, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import startCase from 'lodash/startCase'
import { useParams } from 'react-router-dom'
import { useFetchArtist } from '../api/useFetchArtist'
import { makeStyles } from '../utils/Theme'
import Loading from './Routes/Loading'

const Artist = () => {
    const { artistId } = useParams<{ artistId: string }>()
    const { data, isLoading } = useFetchArtist(artistId)
    const classes = useStyles().classes

    if (isLoading || !data) return <Loading />

    return (
        <Container className={classes.container}>
            <Avatar className={classes.avatar} src={data?.images[0]?.url} />
            <Typography variant="h3" className={classes.title}>
                {data.name}
            </Typography>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 6 }}
                justifyContent={'space-around'}
            >
                <Stack className={classes.statContainer}>
                    <Typography
                        className={classes.statHeader}
                        variant="subtitle2"
                    >
                        Followers
                    </Typography>
                    <Typography className={classes.statValue} variant="h5">
                        {data.followers.total.toLocaleString('en-US')}
                    </Typography>
                </Stack>
                <Stack className={classes.statContainer}>
                    <Typography
                        className={classes.statHeader}
                        variant="subtitle2"
                    >
                        Genres
                    </Typography>
                    {data.genres.map((item) => (
                        <Typography className={classes.statValue} variant="h5">
                            {startCase(item)}
                        </Typography>
                    ))}
                </Stack>
                <Stack className={classes.statContainer}>
                    <Typography className={classes.statHeader} variant="body2">
                        Popularity
                    </Typography>
                    <Typography className={classes.statValue} variant="h5">
                        {data.popularity}%
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Artist

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    avatar: {
        width: 200,
        height: 200,
    },
    title: {
        paddingTop: '2rem',
        fontWeight: 600,
        textAlign: 'center',
    },
    genereBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    statContainer: {
        textAlign: 'center',
        paddingTop: '2rem',
    },
    statHeader: {
        fontWeight: 600,
        color: '#818181',
    },
    statValue: {
        color: '#1ed760',
    },
}))
