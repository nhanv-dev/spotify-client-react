const client_id = 'ff076a0d549947e0a6e78532e2204bea'
const redirect_uri = 'http://localhost:3000'
const scopes = [
    'streaming',
    'user-read-private',
    'user-read-email',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'playlist-modify-private',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-public'
]
export const AUTH_URL = 'https://accounts.spotify.com/authorize' + '?client_id=' + client_id + '&response_type=code' + '&redirect_uri=' + redirect_uri + '&scope=' + scopes.join('%20') + '&show_dialog=true'