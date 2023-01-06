import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet'
import Header from '../components/layout/Header'
import CardSection from '../components/sections/CardSection'
import BackgroundColor from '../components/BackgroundColor'
import { Box } from '@mui/material'
import { spotifyApi } from '../utils/spotify'
const Home = () => {
    const [newReleases, setNewReleases] = useState()
    const [playlist, setPlaylist] = useState()
    const [myPlaylist, setMyPlaylist] = useState()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (!token) return setLoaded(!loaded)
        spotifyApi.setAccessToken(token)
        spotifyApi.getNewReleases({ limit: 6, country: 'VN' })
            .then(
                (data) => {
                    setNewReleases({
                        title: 'Bản phát hành mới phổ biến',
                        items: data.body.albums.items.map(item => {
                            return {
                                id: item.id,
                                name: item.name,
                                artists: item.artists,
                                images: item.images,
                                type: item.type
                            }
                        })
                    })
                })
            .catch(() => setLoaded(!loaded))

        spotifyApi.getFeaturedPlaylists({ limit: 6, country: 'VN', locale: 'vi_VN' })
            .then((data) => {
                setPlaylist({
                    title: data.body.message,
                    items: data.body.playlists.items.map(item => ({
                        id: item.id,
                        name: item.name,
                        desc: item.description,
                        images: item.images,
                        type: item.type
                    }))
                })
            })
            .catch(() => setLoaded(!loaded))

        spotifyApi.getMe()
            .then(data => {
                spotifyApi.getUserPlaylists({ userId: data.id, limit: 6 })
                    .then(data => {
                        setMyPlaylist({
                            title: 'Playlist của bạn',
                            desc: '',
                            items: data.body.items.map(item => ({
                                id: item.id,
                                name: item.name,
                                desc: item.description,
                                images: item.images,
                                type: item.type
                            }))
                        })
                    })
                    .catch(() => setLoaded(!loaded))
            })
            .catch(() => setLoaded(!loaded))
    }, [loaded])

    return (
        <Helmet title="Trình phát trên web" style={{ position: 'relative' }}>
            <Header></Header>
            <BackgroundColor />
            <Box sx={{ p: 3 }} >
                {newReleases &&
                    <CardSection title={newReleases.title} desc={newReleases.desc} items={newReleases.items} />}
                {playlist &&
                    <CardSection title={playlist.title} desc={playlist.desc} items={playlist.items} />}
                {myPlaylist &&
                    <CardSection title={myPlaylist.title} desc={myPlaylist.desc} items={myPlaylist.items} />}
            </Box>
        </Helmet>

    );
};


export default Home;