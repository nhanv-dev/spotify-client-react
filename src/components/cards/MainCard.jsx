import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardActionArea, Typography, IconButton } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
export default function MainCard({ item }) {
    let { id, name, artists, desc, images, type } = item;
    let url = `/${type}/${id}`
    if (!desc && artists) {
        desc = artists.map(a => a.name)
    }

    return (
        <Card
            sx={{
                backgroundColor: '#181818', color: '#ffffff', height: '100%',
                position: 'relative',
                '&:hover #play-card.button-play-card': {
                    top: 'calc(45% - .8rem)',
                    visibility: 'visible',
                    opacity: '1'
                }
            }}>
            <IconButton component={Link} to={url || ''} id="play-card" className="button-play-card" sx={{ top: '45%' }} >
                <PlayArrowRoundedIcon sx={{ fontSize: '40px', }} />
            </IconButton>
            <CardActionArea
                component={Link} to={url || ''}
                sx={{ zIndex: 0, padding: '16px' }}>
                <Box
                    component="div"
                    sx={{
                        marginBottom: '16px',
                        width: '100%',
                        position: 'relative',
                        paddingBottom: '100%',
                        backgroundColor: '#333',
                        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
                        borderRadius: type === 'artist' ? '50%' : '4px',
                        overflow: 'hidden',
                    }}>
                    <Box
                        component="img"
                        src={(images && images[0]?.url) || 'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg'}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: '0',
                            left: '0',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            borderRadius: type === 'artist' ? '50%' : '4px'
                        }}
                    />
                </Box>
                <CardContent sx={{ padding: '0' }}>
                    <Typography gutterBottom component="div" sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        lineHeight: '24px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {name}
                    </Typography>
                    <Typography sx={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        lineHeight: '20px',
                        height: '40px',
                        color: '#b3b3b3',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        marginTop: '4px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
