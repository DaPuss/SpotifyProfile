import GitHubIcon from '@mui/icons-material/GitHub'
import HistoryIcon from '@mui/icons-material/History'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Person2Icon from '@mui/icons-material/Person2'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import { List } from '@mui/material'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'
import { useSpotify } from '../../hooks/useSpotify'
import { makeStyles } from '../../utils/Theme'
import MenuItem from './MenuItem'
const NavBar = () => {
    const classes = useStyles().classes
    const { hasLoggedIn } = useSpotify()
    const isMobile = useMediaQuery('(max-width:600px)')

    if (!hasLoggedIn) return null

    // if (isMobile) return <BottomNav />

    return (
        <nav className={classes.container}>
            {!isMobile && (
                <Link to="/">
                    <img className={classes.logo} src={'./spotify.png'} />
                </Link>
            )}
            <List className={classes.menuItemsContainer}>
                <MenuItem
                    text={'Profile'}
                    route={'/'}
                    icon={<Person2Icon className={classes.menuItemIcon} />}
                />
                <MenuItem
                    text={'Top Artists'}
                    route={'/artists'}
                    icon={
                        <KeyboardVoiceIcon className={classes.menuItemIcon} />
                    }
                />
                <MenuItem
                    text={'Top Tracks'}
                    route={'/tracks'}
                    icon={<MusicNoteIcon className={classes.menuItemIcon} />}
                />
                <MenuItem
                    text={'Recent'}
                    route={'/recent'}
                    icon={<HistoryIcon className={classes.menuItemIcon} />}
                />
                <MenuItem
                    text={'Playlists'}
                    route={'/playlists'}
                    icon={<QueueMusicIcon className={classes.menuItemIcon} />}
                />
            </List>
            {!isMobile && (
                <a href="https://www.github.com" target="_blank">
                    <GitHubIcon className={classes.githubIcon} />
                </a>
            )}
        </nav>
    )
}

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        width: 100,
        height: '100vh',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
        zIndex: 1000,
        '@media screen and (max-width: 600px)': {
            flexDirection: 'row',
            width: '100vw',
            height: 70,
            right: 0,
            bottom: 0,
            top: 'auto',
        },
    },
    logo: {
        position: 'relative',
        width: 50,
        height: 50,
    },
    menuItemsContainer: {
        width: '100%',
        '@media screen and (max-width: 600px)': { display: 'flex' },
    },
    menuItemIcon: {
        width: 25,
        height: 25,
    },
    githubIcon: {
        width: 50,
        height: 50,
        color: 'white',
        '&:hover': {
            color: '#4078c0',
        },
    },
}))

export default NavBar
