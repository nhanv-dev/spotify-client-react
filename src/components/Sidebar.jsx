import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import useRandom from '../custom_hooks/useRandom'
export default function Sidebar({accessToken}) {
    const [playlist, setPlaylist] = useState([])
    useEffect(() => {
        const items = document.querySelectorAll('.sidebar a')
        items.forEach(item => {
            item.href == window.location.href ? item.classList.add('active') : item.classList.remove('active')
        })
    })
    useEffect(() => {
        
    },[playlist])
    return (
        <Box className='sidebar '>
            <Box sx={{ px: 2 }}>
                <List >
                    <ListItem sx={{ mb: 1 }} className='sidebar__logo' component={Link} to='/'>
                        <img src="./images/logo.png" alt='logo spotify' />
                    </ListItem>
                    <ListItem className='sidebar__items__link' component={Link} to='/'>
                        <HomeIcon />
                        <ListItemText primary="Trang chủ" />
                    </ListItem>
                    <ListItem className='sidebar__items__link' component={Link} to='/search'>
                        <SearchIcon />
                        <ListItemText primary="Tìm kiếm" />
                    </ListItem>
                    <ListItem className='sidebar__items__link' component={Link} to='/collection'>
                        <LibraryMusicIcon />
                        <ListItemText primary="Thư viện" />
                    </ListItem>
                </List>
                <List >
                    <ListItem className='sidebar__items__link ' component={Link} to='/playlist/'>
                        <AddBoxSharpIcon />
                        <ListItemText primary="Tạo playlist" />
                    </ListItem>
                    <ListItem className='sidebar__items__link' component={Link} to='/collection/tracks'>
                        <FavoriteSharpIcon />
                        <ListItemText primary="Bài hát đã thích" />
                    </ListItem>
                </List>
                <Divider variant="fullWidth" />
            </Box>
            <Playlist items={playlist} />
            <Box sx={{ px: 2, pb: 1 }} >
                <ListItem className="sidebar__items__link" component={Link} to='/download' >
                    <ArrowCircleDownIcon /><span> Cài đặt ứng dụng</span>
                </ListItem >
            </Box>
        </Box >
    )
}
const Playlist = (props) => {
    const { items } = props
    return (
        <Box className='sidebar__user__playlist'>
            <List key={useRandom().key} sx={{ px: 2 }}>
                {items?.map((item, index) => {
                    return (
                        <ListItem key={index} dense className='sidebar__items__link' component={Link} to={item.link}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}
