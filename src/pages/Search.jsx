import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import { Box } from '@mui/material';
import Searching from '../components/Searching'
const SearchPage = (props) => {
    const [tracks, setTracks] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [artists, setArtists] = useState([])

    const handleSearchResults = ({ tracks, playlists, albums, artists }) => {
        setTracks(tracks)
        setPlaylists(playlists)
        setArtists(artists)
    }
    return (
        <Helmet title="Tìm kiếm" >
            <Header>
                <Searching accessToken={props.accessToken} handleSearchResults={handleSearchResults} />
            </Header>
            <Box sx={{ p: 3 }} >
                {tracks.length > 0 && <MainSection items={tracks} title="Bài hát" />}
                {artists.length > 0 && <MainSection items={artists} title="Nghệ sĩ" />}
                {playlists.length > 0 && <MainSection items={playlists} title="Playlist" />}
            </Box>
        </Helmet>
    )
};

export default SearchPage;