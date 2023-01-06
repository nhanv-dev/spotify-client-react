import axios from 'axios';
import { useEffect, useState } from 'react';
import { client_id, client_secret, redirect_uri, spotify_uri, spotifyApi } from '../utils/spotify'
const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    useEffect(() => {
        if (!code)
            return
        axios
            .post(spotify_uri + '/login', {
                code, client_id, client_secret, redirect_uri
            })
            .then(res => {
                console.log(res.data)
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                sessionStorage.setItem('token', res.data.accessToken)
                window.history.pushState({}, null, '/')
            })
            .catch(() => {
                window.location.href = '/'
                sessionStorage.removeItem('token')
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios
                .post(spotify_uri + '/refresh', {
                    refreshToken
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                    spotifyApi.setAccessToken(res.data.accessToken)
                    sessionStorage.setItem('token', res.data.accessToken)
                })
                .catch(() => {
                    window.location.href = '/'
                    sessionStorage.removeItem('token')
                })
        }, (expiresIn - 60) * 1000)
        return () => { clearInterval(interval) }
    }, [refreshToken, expiresIn])

    return accessToken || sessionStorage.getItem('token')
}

export default useAuth;