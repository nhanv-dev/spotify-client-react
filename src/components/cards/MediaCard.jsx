import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Box } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
function MediaCard(props) {
    const { item } = props
    const history = useHistory()
    const redirectSpotify = (e) => {
        e.preventDefault()
        // window.open(item.externalUrl)
    }
    return (
        <Box onClick={(e) => redirectSpotify(e)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                height: '56px',
                padding: '0 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0s',
                '&:hover': {
                    background: 'rgba(255,255,255,.3)',
                    transition: 'all 0.3s',
                },
                '&:hover svg': {
                    visibility: 'visible',
                    opacity: '1',
                    display: 'inline-block',
                },
                '&:hover .item-index': {
                    visibility: 'hidden',
                    opacity: '0',
                    display: 'none',
                }
            }}>
            {item.number &&
                <Box
                    component="div"
                    sx={{
                        color: '#b3b3b3',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px'
                    }}>
                    <PlayArrowRoundedIcon sx={{
                        visibility: 'hidden',
                        display: 'none',
                        opactity: '0',
                        width: '100%',
                    }} />
                    <Box className='item-index'
                        sx={{ width: '100%', textAlign: 'center' }}>
                        {item.number}
                    </Box>
                </Box>
            }
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.75rem',
                width: '35%',
            }}>
                {item.images &&
                    <Box component="div" sx={{
                        minWidth: '40px',
                        height: '40px',
                    }}>
                        <img src={item.images[0]?.url} alt={item.images[0]?.url} style={{ width: '100%', height: '100%' }}></img>
                    </Box>
                }
                <Box sx={{
                    fontSize: '1rem', lineHeight: '1.5rem', letterSpacing: 'normal', fontWeight: '500', flex: 1
                }}>
                    <Box sx={{
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: item.style === 'detail' ? '600px' : '350px'
                    }}>{item?.name}</Box>
                    <Box component="div" sx={{
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '350px'
                    }}>
                        {item?.artists?.length < 10 ? item?.artists?.map((artist, index) => {
                            return (
                                <Box key={index} component='span'
                                    // component={Link} to={`/artist/${artist.id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        history.push(`/artist/${artist.id}`)
                                    }}
                                    sx={{
                                        fontSize: '.8rem',
                                        lineHeight: '1.5rem',
                                        height: '1.5rem',
                                        color: '#b3b3b3',
                                        textDecoration: 'none',
                                        transition: 'all .2s',
                                        zIndex: 1,
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            color: 'white'
                                        }
                                    }}>{index < item.artists.length - 1 ? `${artist.name}, ` : artist.name}</Box>)
                        }) : <Box sx={{
                            fontSize: '.8rem',
                            lineHeight: '1.5rem',
                            color: '#b3b3b3',
                            textDecoration: 'none',
                        }}>Various artists</Box>
                        }
                    </Box>
                </Box>
            </Box>
            <Box
                component={Link}
                to={`/album/${item.album?.id}`}
                sx={{
                    textAlign: 'left',
                    width: '30%',
                    fontSize: '.9rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: '#b3b3b3',
                    transition: 'all .25s',
                    '&:hover': {
                        color: 'white', textDecoration: 'underline',
                    }
                }}
            >
                {item.album?.name}
            </Box>
            <Box
                sx={{
                    textAlign: 'left',
                    flex: 1,
                    fontSize: '.9rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: '#b3b3b3',
                    transition: 'all .25s',
                    '&:hover': {
                        color: 'white', textDecoration: 'underline',
                    }
                }}
            >
                {item.addedAt}
            </Box>
            <Box sx={{
                fontWeight: '500',
                color: '#b3b3b3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '110px'
            }}>
                <FavoriteBorderOutlinedIcon sx={{
                    fontSize: '1.2rem',
                    visibility: 'hidden',
                    opactity: '0',
                    transition: 'all 0s'
                }} />
                <Box sx={{
                    fontWeight: '500',

                }}>
                    {item.duration}
                </Box>
                <MoreHorizIcon sx={{
                    fontSize: '1.2rem',
                    visibility: 'hidden',
                    opactity: '0',
                    transition: 'all 0s'
                }} />
            </Box>
        </Box >
    );
}

export default MediaCard;