import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { QueryRootFollowing } from './types'
export const useFetchFollowing = (id?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`following`],
        queryFn: () =>
            callEndpoint({
                path: `/me/following`,
            }),
    })

    return { isLoading, error, data: data as QueryRootFollowing }
}
