import SpotifyWebApi from 'spotify-web-api-node';

export const spotify_uri = 'https://spotify-server-node.vercel.app'
// export const spotify_uri = 'http://localhost:3001'

export const redirect_uri = 'https://spotify-client-react.web.app'
// export const redirect_uri = 'http://localhost:3000'

export const client_id = '96495a496bd743b28aeb95759eb85197'
export const client_secret = '8115c685b0134817b900e0a0de979952'

export const scopes = [
    'streaming',
    'app-remote-control',

    'user-read-private',
    'user-read-email',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',

    'playlist-modify-private',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-public',

    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
]
export const AUTH_URL = 'https://accounts.spotify.com/authorize'
    + '?client_id=' + client_id
    + '&response_type=code'
    + '&redirect_uri=' + redirect_uri
    + '&scope=' + scopes.join('%20')
    + '&show_dialog=true'

export const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    redirectUri: redirect_uri,
    clientSecret: client_secret,
})