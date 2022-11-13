import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { Artist } from './types'

export const useFetchArtist = (id?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`artist-${id}`],
        queryFn: () =>
            callEndpoint({
                path: `/artists/${id}`,
            }),
    })

    return { isLoading, error, data: data as Artist }
}
