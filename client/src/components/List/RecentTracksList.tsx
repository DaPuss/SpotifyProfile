import { RecentTrackItem } from '../../api/types'
import { useFetchRecentTracks } from '../../api/useFetchRecentTracks'
import List from './List'
import TrackListItem from './ListItems/TrackListItem'

interface Props {
    isPageView: boolean
    limit?: number
}
const TopTrackList = ({ isPageView, limit = 50 }: Props) => {
    const { data, isLoading } = useFetchRecentTracks(limit)

    return (
        <List
            seeMoreRoute="/tracks"
            title="Recent Tracks"
            isPageView={isPageView}
            isLoading={isLoading || !data}
        >
            {data &&
                data.items.map((item: RecentTrackItem, index: number) => (
                    <TrackListItem
                        key={`dhb_tp_trk_${index}`}
                        item={item.track}
                    />
                ))}
        </List>
    )
}

export default TopTrackList
