import React, { useState, useEffect } from 'react';
import {  NavLink } from 'react-router-dom'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import { spotifyApi } from '../../utils/spotify'
const UserPlaylist = () => {
    const [playlist, setPlaylist] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (!token) return setLoaded(!loaded)
        spotifyApi.setAccessToken(token)
        spotifyApi.getMe()
            .then(data => {
                spotifyApi.getUserPlaylists(data.id)
                    .then(data => {
                        setPlaylist(data?.body?.items)
                    })
                    .catch(() => setLoaded(!loaded))
            })
            .catch(() => setLoaded(!loaded))
    }, [loaded])
    return (
        <Box className='sidebar__user__playlist'>
            <List sx={{ px: 2 }}>
                {playlist?.map((item, index) => {
                    return (
                        <ListItem key={index} dense className='sidebar__items__link' component={NavLink} to={`/playlist/${item.id}`} activeClassName='active' exact='true'>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}
export default UserPlaylist