import React, { useState, useEffect } from 'react';
import { Box, Button, Avatar, Menu, MenuItem } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { spotifyApi } from '../../utils/spotify'
export default function UserOptions() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = (event) => {
        event.preventDefault();
        sessionStorage.removeItem('token')
        window.location.href = '/'
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (!token) return setLoaded(!loaded)
        spotifyApi.setAccessToken(token)
        spotifyApi.getMe()
            .then(data => {
                setUser({
                    id: data.body.id,
                    name: data.body.display_name,
                    avatar: data.body.images[0]
                })
            })
            .catch(() => setUser({}))
    }, [loaded])
    return (
        <Box sx={{
            backgroundColor: 'rgba(0,0,0,.7)',
            borderRadius: '50px',
            '.header__on-scroll &': {
                marginRight: '.5rem',
                backgroundColor: 'rgba(33,33,33,1)'
            }
        }}>
            <Button
                id="user-options"
                aria-controls={open ? 'menu-user' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    textTransform: 'none',
                    color: '#fff',
                    gap: 1,
                    padding: 0,
                    borderRadius: '50px',
                    '&:hover': {
                        backgroundColor: 'transparent'
                    },

                }}    >
                <Avatar src={user.avatar} sx={{ transform: 'scale(.7)' }} />
                <Box sx={{
                    maxWidth: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    <Box sx={{
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        flex: '1',
                        fontSize: '.85rem'
                    }}>
                        {user.name}
                    </Box>
                    <ArrowDropDownOutlinedIcon sx={{
                        width: '2rem',
                        paddingRight: '.5rem',
                    }} />
                </Box>
            </Button>
            <Menu
                id="menu-user"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'user-options',
                }}
                sx={{
                    transform: 'translateX(-18px)',
                    '& div': { background: 'transparent' },
                    '& ul': {
                        backgroundColor: '#282828',
                        color: '#fff',
                        boxShadow: '0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)',
                        maxHeight: 'calc(100vh - 24px)',
                        maxWidth: '350px',
                        minWidth: '160px',
                        overflowY: 'auto',
                        padding: '4px',
                        '& li': {
                            fontSize: '.95rem',
                            letterSpacing: '.5px',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,.1)',
                            }
                        }
                    }
                }}
            >
                <MenuItem onClick={handleClose}>Tài khoản</MenuItem>
                <MenuItem onClick={handleClose}>Hồ sơ</MenuItem>
                <MenuItem onClick={handleClose}>
                    <Box component="a" sx={{
                        color: 'white', textDecoration: 'none'
                    }}
                        href="https://www.spotify.com/vn-en/premium/">Nâng cấp lên Prenium</Box></MenuItem>
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
        </Box>
    );
}