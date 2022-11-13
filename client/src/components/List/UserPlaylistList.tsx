import { Grid } from '@mui/material'
import { Playlist } from '../../api/types'
import { useFetchPlaylists } from '../../api/useFetchPlaylists'
import PlaylistItem from './ListItems/PlaylistItem'
interface Props {}
const UserPlaylistList = ({}: Props) => {
    const { data, isLoading } = useFetchPlaylists()
    return (
        <Grid container>
            {data &&
                data.items.map((item: Playlist, index: number) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={`dhb_tp_art_${index}`}
                    >
                        <PlaylistItem key={`dhb_tp_trk_${index}`} item={item} />
                    </Grid>
                ))}
        </Grid>
    )
}

export default UserPlaylistList
