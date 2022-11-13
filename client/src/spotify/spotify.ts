import { getHashParams } from '../utils/hashUtils';
interface RefetchTokenResponse{
  access_token: string
}
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

// Refresh the token
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
export const getAccessToken = () => {
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

export const token = getAccessToken();

export const logout = () => {
  window.localStorage.removeItem('spotify_token_timestamp');
  window.localStorage.removeItem('spotify_access_token');
  window.localStorage.removeItem('spotify_refresh_token');
  window.location.reload();
};