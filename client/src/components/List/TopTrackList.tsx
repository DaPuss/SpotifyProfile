import { querylength, Track } from '../../api/types'
import { useFetchTopTracks } from '../../api/useFetchTopTracks'
import List from './List'
import TrackListItem from './ListItems/TrackListItem'

interface Props {
    isPageView: boolean
    variant: querylength
    limit?: number
}
const TopTrackList = ({ isPageView, variant, limit = 50 }: Props) => {
    const { data, isLoading } = useFetchTopTracks(variant, limit)

    return (
        <List
            seeMoreRoute="/tracks"
            title="Top Tracks of All Time"
            isPageView={isPageView}
            isLoading={isLoading}
        >
            {data &&
                data.items.map((item: Track, index: number) => (
                    <TrackListItem key={`dhb_tp_trk_${index}`} item={item} />
                ))}
        </List>
    )
}

export default TopTrackList
