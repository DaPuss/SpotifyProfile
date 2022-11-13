import { PlaylistItem, QueryRootPlaylistTracks } from '../../api/types'
import List from './List'
import TrackListItem from './ListItems/TrackListItem'

interface Props {
    playlistData: QueryRootPlaylistTracks
    isLoading: boolean
}

const PlayListTrackList = ({ playlistData, isLoading }: Props) => {
    return (
        <List seeMoreRoute="/" title="" isPageView={true} isLoading={isLoading}>
            {playlistData &&
                playlistData.items.map((item: PlaylistItem, index: number) => (
                    <TrackListItem
                        key={`dhb_tp_trk_${index}`}
                        item={item.track}
                    />
                ))}
        </List>
    )
}

export default PlayListTrackList
