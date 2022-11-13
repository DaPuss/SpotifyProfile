import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { buildQueryString } from '../utils/hashUtils'
import { querylength, QueryRootArtists } from './types'
export const useFetchTopArtists = (variant: querylength, limit?: number) => {
    const { callEndpoint } = useSpotify()
    const params = `?${buildQueryString({
        limit: limit ? limit : 10,
        time_range: variant,
    })}`
    const { isLoading, error, data } = useQuery({
        queryKey: [`user-artists-tracks-${variant}-${limit}`],
        queryFn: () =>
            callEndpoint({
                path: `/me/top/artists${params.length > 1 && params}`,
            }),
    })

    return { isLoading, error, data: data as QueryRootArtists }
}
