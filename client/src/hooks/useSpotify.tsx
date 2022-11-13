import React, { createContext, useContext, useEffect, useState } from 'react'
// @ts-ignore: Unreachable code error
import { useNavigate } from 'react-router-dom'
import { getHashParams } from '../utils/hashUtils';
declare global {
    interface Window {
        spotifyAuthCallback: any
    }
}

const BASE_API_URL = 'https://api.spotify.com/v1'

const LS_KEYS = {
    ACCESS_TOKEN: 'spotify_token_timestamp',
    EXP_TIMESTAMP: 'spotify_access_token',
    TOKEN_TYPE: 'spotify_refresh_token',
}

interface RefetchTokenResponse{
    access_token: string
  }

interface SpotifyContext {
    logout: () => void
    isLoading: boolean
    readonly hasLoggedIn: boolean
    token: string
    callEndpoint: ({
        path,
        method,
    }: {
        path: string
        method?: 'GET' | 'PUT' | undefined
    }) => Promise<any>
}
const spotifyContext = createContext<SpotifyContext>({
    logout: () => {},
    isLoading: false,
    hasLoggedIn: false,
    callEndpoint: () => Promise.resolve(),
    token: ''
})

export const SpotifyProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const spotify = useProvideSpotify()

    return (
        <spotifyContext.Provider value={spotify}>
            {children}
        </spotifyContext.Provider>
    )
}

export const useSpotify = () => {
    return useContext(spotifyContext)
}

const useProvideSpotify: any = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

      // TOKENS ******************************************************************************************
    const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds
    
    const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now().toString());
    const setLocalAccessToken = (token:string) => {
    setTokenTimestamp();
    window.localStorage.setItem('spotify_access_token', token);
    };
    const setLocalRefreshToken = (token:string) => window.localStorage.setItem('spotify_refresh_token', token);
    const getTokenTimestamp = (): string | null => window.localStorage.getItem('spotify_token_timestamp');
    const getLocalAccessToken = ():string | null => window.localStorage.getItem('spotify_access_token');
    const getLocalRefreshToken = ():string | null => window.localStorage.getItem('spotify_refresh_token');
    
    const callEndpoint = async ({
        path,
        method = 'GET',
    }: {
        path: string
        method?: 'GET' | 'PUT'
    }) => {
        return await (
            await fetch(`${BASE_API_URL}${path}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method,
            })
        ).json()
    }

      const refreshAccessToken = async () => {
        try {
          const resonse = await fetch(`/refresh_token?refresh_token=${getLocalRefreshToken()}`)
          .then((response) => response.json())
          .then((data) => 
            data as RefetchTokenResponse
          )
          .catch(() => ({access_token: ''}));
      
          const { access_token } = resonse;
          setLocalAccessToken(access_token);
          window.location.reload();
          return;
        } catch (e) {
          console.error(e);
        }
      };
      
      // Get access token off of query params (called on application init)
      const getAccessToken = () => {
        const { error, access_token, refresh_token } = getHashParams();
      
        if (error) {
          console.error(error);
          refreshAccessToken();
        }
      
        // If token has expired
        const tokenTimestamp = getTokenTimestamp();
        if (tokenTimestamp && Date.now() - Date.parse(tokenTimestamp) > EXPIRATION_TIME) {
          console.warn('Access token has expired, refreshing...');
          refreshAccessToken();
        }
      
        const localAccessToken = getLocalAccessToken();
      
        // If there is no ACCESS token in local storage, set it and return `access_token` from params
        if ((!localAccessToken || localAccessToken === 'undefined') && access_token) {
          setLocalAccessToken(access_token);
          setLocalRefreshToken(refresh_token);
          return access_token;
        }
      
        return localAccessToken;
      };
      
    const token = getAccessToken();

    const logout = () => {
        try {
            Object.values(LS_KEYS).forEach((key) => {
                window.localStorage.removeItem(key)
            })
        } catch (err) {
            console.error(err)
        }        
        navigate('/')        
        window.location.reload()
    }

    useEffect(() => {
        try {
            if(token){
                setIsLoading(false)
            }
        } catch (err) {
            console.error(err)
            setIsLoading(false)
        }
    }, [])


    return {
        logout,
        callEndpoint,
        isLoading,
        hasLoggedIn: !!token
    }
}
