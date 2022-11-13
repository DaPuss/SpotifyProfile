import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { buildQueryString } from '../utils/hashUtils'
export const useFetchRecentTracks = (limit?: number) => {
    const { callEndpoint } = useSpotify()
    const params = `?${buildQueryString({
        limit: limit ? limit : 10,
    })}`
    const { isLoading, error, data } = useQuery({
        queryKey: [`user-recent-tracks-${limit}`],
        queryFn: () =>
            callEndpoint({
                path: `/me/player/recently-played${params.length > 1 && params}`,
            }),
    })

    return { isLoading, error, data}
}
