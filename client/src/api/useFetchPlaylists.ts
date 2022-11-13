import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { QueryRootPlaylist } from './types'

export const useFetchPlaylists = () => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`playlists`],
        queryFn: () =>
            callEndpoint({
                path: `/me/playlists`,
            }),
    })

    return { isLoading, error, data: data as QueryRootPlaylist }
}
