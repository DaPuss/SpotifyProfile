import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { Track } from './types'

export const useFetchTrack = (id?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`track-${id}`],
        queryFn: () =>
            callEndpoint({
                path: `/tracks/${id}`,
            }),
    })

    return { isLoading, error, data: data as Track }
}
