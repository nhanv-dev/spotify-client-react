import React, { useEffect, useState, useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SpotifyWebApi from 'spotify-web-api-node';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: '500px',

}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        maxWidth: '500px'
    },
}));
const Searching = (props) => {
    const [searching, setSearching] = useState('');
    const [tracks, setTracks] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [artists, setArtists] = useState([])
    const typingTimeoutRef = useRef(null)
    const spotifyApi = new SpotifyWebApi({
        clientId: 'ff076a0d549947e0a6e78532e2204bea'
    });
    spotifyApi.setAccessToken(props.accessToken);

    useEffect(() => {
        if (!searching) return
        spotifyApi.searchTracks(searching)
            .then((data) => {
                setTracks(data.body.tracks.items.map(item => {
                    return {
                        name: item.name,
                        img: item.album.images[0].url
                    }
                }))
            })
            .catch(() => setTracks([]))
        spotifyApi.searchPlaylists(searching)
            .then((data) => {
                setPlaylists(data.body.playlists.items.map(item => {
                    return {
                        name: item.name,
                        desc: item.owner.display_name,
                        img: item.images[0].url
                    }
                }))
            })
            .catch(() => setPlaylists([]))
        spotifyApi.searchArtists(searching)
            .then((data) => {
                setArtists(data.body.artists.items.map(item => {
                    return {
                        name: item.name,
                        img: item.images[0].url
                    }
                }))
            })
            .catch(() => setArtists([]))
        props.handleSearchResults({ tracks: tracks, playlists: playlists, artists: artists })
    }, [searching])
    const handleSearching = (event) => setSearching(event.target.value) 

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Tìm kiếm..."
                onChange={handleSearching}
            />
        </Search>
    )
};

export default Searching;