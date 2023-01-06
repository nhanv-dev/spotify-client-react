import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { spotifyApi } from '../utils/spotify';
import Helmet from '../components/Helmet'
import Header from '../components/layout/Header'
import CardSection from '../components/sections/CardSection'
import BackgroundColor from '../components/BackgroundColor'
import { Box } from '@mui/material'
const Genre = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({})
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        let content = document.querySelector('.container__content')
        content.style.scrollBehavior = 'auto'
        content.scrollTop = 0
        content.style.scrollBehavior = 'smooth'
    }, [id])

    useEffect(() => {
        spotifyApi.setAccessToken(sessionStorage.getItem('token'))
        spotifyApi.getCategory(id, { country: 'VN', locale: 'vi_VN' })
            .then((data) => {
                setInfo({
                    name: data.body.name,
                    images: data.body.icons
                })
            })
        spotifyApi.getPlaylistsForCategory(id, { country: 'VN', locale: 'vi_VN', limit: 10 })
            .then((data) => {
                console.log(data)
                setPlaylists(data.body.playlists.items.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        desc: item.description,
                    }
                }))
            })
    }, [id])
    return (
        <Helmet title={info.name} style={{ position: 'relative' }} >
            <Header />
            <BackgroundColor src={info.images} />
            <Box sx={{ p: 3 }}>
                <Infomation info={info} />
                <Box sx={{ mb: 3 }}>
                    {playlists?.map((playlist, index) => {
                        return (<PlaylistItem key={index} playlist={playlist} />)
                    })}
                </Box>

            </Box>

        </Helmet >

    );
}
const PlaylistItem = ({ playlist }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        spotifyApi.getPlaylistTracks(playlist.id, { limit: 6 })
            .then(data => {
                setItems(
                    data.body.items.map(item => ({
                        id: item.track.id,
                        name: item.track.name,
                        images: item.track.album.images,
                        artists: item.track.artists,
                        type: item.track.type
                    }))
                )
            })
    }, [playlist.id])
    return (
        <CardSection items={items} title={playlist.name} desc={playlist.desc} url='' />
    )
}
const Infomation = ({ info }) => {
    return (
        <Box sx={{
            maxHeight: '230px',
            height: '230px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: '2rem',
            flexWrap: "nowrap",
        }}>
            <Box sx={{
                fontSize: info.name?.length > 30 ? '2.5rem' : '5.5rem',
                fontWeight: '700',
                letterSpacing: '-0.04em'
            }}> {info.name}</Box>

        </Box>
    )
}
export default Genre;


