import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { QueryRootUser } from './types'

export const useFetchUser = () => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: ['user'],
        queryFn: () => callEndpoint({ path: `/me` }),
    })

    return { isLoading, error, data: data as QueryRootUser }
}
