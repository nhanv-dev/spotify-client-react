import React from 'react';
import { Link } from 'react-router-dom'
import MediaCard from '../cards/MediaCard'
import { Box, Stack, Typography } from '@mui/material'
const MediaSection = (props) => {
    const { title, items, url } = props
    return (
        <Box sx={{ width: '100%', mb: 5 }}>
            {title &&
                <Box component='div' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    paddingBottom: '1.5rem'
                }}>
                    <Typography component="div" sx={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        letterSpacing: '-.04rem'
                    }}>
                        {title}
                    </Typography>
                    <Box to={url || ''} component={Link} sx={{
                        fontSize: '.75rem',
                        fontWeight: '600',
                        lineHeight: '16px',
                        textTransform: 'uppercase',
                        color: '#b3b3b3',
                        fontFamily: 'Roboto',
                        letterSpacing: '1px',
                        textDecoration: 'none'
                    }}
                    >
                        Xem tất cả
                    </Box>
                </Box>
            }
            <Stack>
                {items?.map((item, index) => {
                    return <MediaCard key={index} item={item} />
                })}
            </Stack>
        </Box>
    );
};

export default MediaSection;