import { useState, useEffect } from 'react'
import moment from 'moment';
import { spotifyApi } from "./spotify"
import { changeDuration } from "./changeDuration"

const SpotifyData = ({ type, id }) => {
    const [info, setInfo] = useState({})
    const [artists, setArtists] = useState()
    const [albums, setAlbums] = useState()
    const [tracks, setTracks] = useState()
    useEffect(() => {
        switch (type) {
            case 'track':
                getTrack(id)
                    .then(data => {
                        setInfo({ ...data.track, hasAlbum: true })
                        setTracks([data.track])
                        return data.track.artists[0]
                    })
                    .then(artist => {
                        getArtistRelatedArtists(artist.id)
                            .then(artists => {
                                setArtists({ title: 'Nghệ sĩ liên quan', items: artists })
                            })
                        getArtistAlbums(artist.id)
                            .then(albums => {
                                setAlbums({ title: `Album khác của ${artist.name}`, items: albums })
                            })
                    })

                break
            case 'album':
                getAlbum(id)
                    .then(data => {
                        setInfo(data.info)
                        setTracks(data.items)
                        return data
                    })
                    .then(data => {
                        const artist = data.info?.artists[0]
                        getArtistRelatedArtists(artist.id)
                            .then(artists => {
                                setArtists({ title: 'Nghệ sĩ liên quan', items: artists })
                            })
                        getArtistAlbums(artist.id)
                            .then(albums => {
                                setAlbums({ title: `Album khác của ${artist.name}`, items: albums })
                            })
                    })

                break
            case 'artist':
                getArtist(id)
                    .then(data => {
                        setInfo({ ...data.artist, hasAlbum: true })
                        getArtistTopTracks(data.artist.id)
                            .then(tracks => {
                                setTracks(tracks)
                            })
                        getArtistRelatedArtists(data.artist.id)
                            .then(artists => {
                                setArtists({ title: 'Nghệ sĩ liên quan', items: artists })
                            })
                        getArtistAlbums(data.artist.id)
                            .then(albums => {
                                setAlbums({ title: `Album khác của ${data.artist.name}`, items: albums })
                            })
                    })
                break
            case 'playlist':
                getPlaylist(id, 50)
                    .then(data => {
                        setInfo(data.info)
                        setTracks(data.playlists)
                    })
                break
            default:
                break
        }
    }, [type, id])

    async function getTrack(id) {
        return spotifyApi.getTrack(id)
            .then(data => {
                const track = {
                    number: 1,
                    id: data.body.id,
                    name: data.body.name,
                    externalUrl: data.body.external_urls.spotify,
                    artists: data.body.artists,
                    album: data.body.album,
                    images: data.body.album.images,
                    duration: changeDuration(data.body.duration_ms),
                    type: data.body.type,
                    addedAt: data.body.added_at,

                }
                return { track }
            })
    }

    async function getAlbum(id) {
        return spotifyApi.getAlbum(id)
            .then(data => {
                let totalTime = 0
                const items = (data.body.tracks.items.map((item, index) => {
                    totalTime += item.duration_ms
                    return {
                        number: index + 1,
                        id: item.id,
                        name: item.name,
                        externalUrl: item.external_urls.spotify,
                        artists: item.artists,
                        album: item.album,
                        duration: changeDuration(item.duration_ms),
                        type: item.type,
                        addedAt: item.added_at,
                    }
                }))
                const info = {
                    id: data.body.id,
                    name: data.body.name,
                    label: data.body.label,
                    images: data.body.images,
                    copyrights: data.body.copyrights,
                    artists: data.body.artists,
                    totalTracks: data.body.total_tracks,
                    type: data.body.type,
                    externalUrl: data.body.external_urls.spotify,
                    totalTime: changeDuration(totalTime, 'max')
                }
                return { info, items }
            });
    }
    async function getArtistAlbums(id) {
        return spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
            .then((data) => {
                return data.body.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    artists: item.artists,
                    images: item.images,
                    totalTracks: item.totalTracks,
                    type: item.type,
                }))
            })

    }

    async function getArtist(id) {
        return spotifyApi.getArtist(id)
            .then(data => {
                const artist = {
                    id: data.body.id,
                    type: data.body.type,
                    name: data.body.name,
                    followers: numberWithCommas(data.body.followers.total),
                    images: data.body.images,
                }

                return { artist }
            })
    }

    async function getArtistTopTracks(id) {
        return spotifyApi.getArtistTopTracks(id, 'VN')
            .then(data => {
                return (data.body.tracks.map((item, index) => {
                    return {
                        number: index + 1,
                        id: item.id,
                        name: item.name,
                        externalUrl: item.external_urls.spotify,
                        artists: item.artists,
                        album: item.album,
                        images: item.album.images,
                        duration: changeDuration(item.duration_ms),
                        type: item.type,
                        addedAt: item.added_at,
                    }
                }))
            });
    }

    async function getArtistRelatedArtists(id) {
        return spotifyApi.getArtistRelatedArtists(id)
            .then(data => {
                return (data.body.artists.slice(0, 6).map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        images: item.images,
                        followers: item.followers.total,
                        type: item.type
                    }
                }))
            })
    }
    async function getPlaylist(id, limit) {
        return spotifyApi.getPlaylist(id, { limit: limit })
            .then(data => {
                const playlists = (data.body.tracks.items.map((item, index) => {
                    return {
                        number: index + 1,
                        id: item.track.id,
                        name: item.track.name,
                        externalUrl: item.track.external_urls.spotify,
                        artists: item.track.artists,
                        album: item.track.album,
                        images: item.track.album.images,
                        duration: changeDuration(item.track.duration_ms),
                        type: item.track.type,
                        addedAt: moment(new Date(item.added_at)).fromNow(),

                    }
                }))
                const info = {
                    id: data.body.id,
                    name: data.body.name,
                    desc: data.body.description,
                    images: data.body.images,
                    type: data.body.type,
                    externalUrl: data.body.external_urls,
                    hasAlbum: true,
                    hasAddAt: true
                }
                return { playlists, info }
            })
    }

    return { info, tracks, albums, artists }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default SpotifyData
