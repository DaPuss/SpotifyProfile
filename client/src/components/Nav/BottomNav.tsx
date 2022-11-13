import HistoryIcon from '@mui/icons-material/History'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Person2Icon from '@mui/icons-material/Person2'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Theme } from '@mui/material/styles'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '../../utils/Theme'

const BottomNav = () => {
    const [value, setValue] = React.useState('/')
    const classes = useStyles().classes
    const navigate = useNavigate()
    const prevCountRef = React.useRef<string>('/')

    useEffect(() => {
        if (prevCountRef.current != value) {
            navigate(value)
        }

        prevCountRef.current = value
    }, [value])

    return (
        <BottomNavigation
            className={classes.container}
            value={value}
            showLabels
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction
                label="Profile"
                icon={<Person2Icon />}
                value={'/'}
            />
            <BottomNavigationAction
                label="TopArtists"
                icon={<KeyboardVoiceIcon />}
                value={'/artists'}
            />
            <BottomNavigationAction
                label="TopTracks"
                icon={<MusicNoteIcon />}
                value={'/tracks'}
            />
            <BottomNavigationAction
                label="Recent"
                icon={<HistoryIcon />}
                value={'/recent'}
            />
            <BottomNavigationAction
                label="Playlists"
                icon={<QueueMusicIcon />}
                value={'/playlists'}
            />
        </BottomNavigation>
    )
}

const useStyles = makeStyles()((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'fixed',
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        width: '100vw',
        height: 75,
        zIndex: 1000,
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
    },
}))

export default BottomNav
