import { Route, Routes } from 'react-router-dom'
import Artist from './components/Artist'
import Layout from './components/Layout'
import Dashboard from './components/Routes/Dashboard'
import Login from './components/Routes/Login'
import Playlist from './components/Routes/Playlist'
import RecentTracks from './components/Routes/RecentTracks'
import TopArtists from './components/Routes/TopArtists'
import TopTracks from './components/Routes/TopTracks'
import UserPlaylists from './components/Routes/UserPlaylists'
import ScrollToTop from './components/ScrollToTop'
import Track from './components/Track'
import { useSpotify } from './hooks/useSpotify'
function App() {
    const { hasLoggedIn } = useSpotify()

    return (
        <Layout>
            <ScrollToTop />
            {!hasLoggedIn ? (
                <Login />
            ) : (
                <Routes>
                    <Route>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/artists" element={<TopArtists />} />
                        <Route path="/artist">
                            <Route path=":artistId" element={<Artist />} />
                        </Route>
                        <Route path="/tracks" element={<TopTracks />} />
                        <Route path="/track">
                            <Route path=":trackId" element={<Track />} />
                        </Route>
                        <Route path="/recent" element={<RecentTracks />} />
                        <Route path="/playlists" element={<UserPlaylists />} />
                        <Route path="/playlist">
                            <Route path=":playlistId" element={<Playlist />} />
                        </Route>
                    </Route>
                </Routes>
            )}
        </Layout>
    )
}

export default App
