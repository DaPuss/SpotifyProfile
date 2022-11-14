import { useQuery } from '@tanstack/react-query'
import { useSpotify } from '../hooks/useSpotify'
import { TrackAnalysis } from './types'
export const useFetchTrackAnalysis = (id?: string) => {
    const { callEndpoint } = useSpotify()

    const { isLoading, error, data } = useQuery({
        queryKey: [`audio-analysis-${id}`],
        queryFn: () =>
            callEndpoint({
                path: `/audio-analysis/${id}`,
            }),
    })

    return { isLoading, error, data: data as TrackAnalysis }
}
