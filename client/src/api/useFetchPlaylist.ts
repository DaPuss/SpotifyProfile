import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { QueryRootPlaylistTracks } from './types'

export const useFetchPlaylist = (playlistId?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`playlist-${playlistId}`],
        queryFn: () =>
            callEndpoint({
                path: `/playlists/${playlistId}/tracks`,
            }),
    })

    return { isLoading, error, data: data as QueryRootPlaylistTracks }
}
