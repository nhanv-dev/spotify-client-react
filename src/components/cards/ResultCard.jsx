import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardActionArea, Typography, IconButton } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
export default function ResultCard({ item }) {
    let { id, name, artists, desc, images, type } = item;
    let url = `/${type}/${id}`
    if (!desc && artists) {
        desc = artists.map(a => a.name)
    }

    return (
        <Box sx={{ marginBottom: '3rem' }}>
            <Box component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: '1.5rem'
            }}>
                <Typography component="div" sx={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    letterSpacing: 'normal'
                }}>
                    Kết quả hàng đầu
                </Typography>
            </Box>
            <Card
                sx={{
                    backgroundColor: '#181818', color: '#ffffff', height: '100%',
                    position: 'relative',
                    '&:hover #play-card.button-play-card': {
                        top: 'calc(70% - 1rem)',
                        visibility: 'visible',
                        opacity: '1'
                    }
                }}>
                <IconButton component={Link} to={url || ''} id="play-card" className="button-play-card" sx={{ top: '70%' }}>
                    <PlayArrowRoundedIcon sx={{ fontSize: '48px' }} />
                </IconButton>
                <CardActionArea
                    component={Link} to={url || ''}
                    sx={{ zIndex: 0, padding: '14px' }}>
                    <Box
                        component="div"
                        sx={{
                            marginBottom: '16px',
                            width: '96px',
                            position: 'relative',
                            paddingBottom: '96px',
                            backgroundColor: '#333',
                            boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
                            borderRadius: type === 'artist' ? '50%' : '4px',
                            overflow: 'hidden',
                        }}>
                        <Box
                            component="img"
                            src={images[0]?.url || 'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg'}
                            sx={{
                                position: 'absolute',
                                width: '120px',
                                height: '120px',
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
                            fontSize: '1.75rem',
                            fontWeight: '700',
                            lineHeight: '1.8rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            marginBottom: '12px'
                        }}>
                            {name}
                        </Typography>
                        <Typography sx={{
                            fontSize: '.9rem',
                            fontWeight: '500',
                            lineHeight: '24px',
                            height: '48px',
                            color: '#b3b3b3',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            display: '-webkit-box',
                            marginTop: '4px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            {desc}
                            <Box component="span" sx={{
                                color: 'white',
                                fontSize: '.75rem',
                                padding: '4px 12px',
                                borderRadius: '50px !important',
                                marginLeft: '10px',
                                lineHeight: '1rem',
                                backgroundColor: 'rgba(0, 0, 0, .2)',
                                display: 'inline - block',
                                letterSpacing: '.1em',
                                textTransform: 'uppercase',

                            }}
                            >
                                {type === 'track' && 'Bài hát'}
                                {type === 'album' && 'Album'}
                            </Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        </Box >
    )
}
