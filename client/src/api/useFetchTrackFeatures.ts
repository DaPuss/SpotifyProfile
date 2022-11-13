import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { TrackFeatures } from './types'
export const useFetchTrackFeatures = (id?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`audio-features-${id}`],
        queryFn: () =>
            callEndpoint({
                path: `/audio-features/${id}`,
            }),
    })

    return { isLoading, error, data: data as TrackFeatures }
}
