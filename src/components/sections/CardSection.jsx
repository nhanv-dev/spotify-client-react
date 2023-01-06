import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MainCard from '../cards/MainCard';
export default function CardSection(props) {
    const { title, desc, url, items } = props;
    return items ? (
        <Box sx={{ mb: 5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Box sx={{ pb: 2 }}>
                    <Typography gutterBottom variant="h2" component="div" sx={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: '28px',
                        letterSpacing: '-.04em',
                    }}>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        fontSize: '1rem',
                        fontWeight: '500',
                        lineHeight: '16px',
                        letterSpacing: 'normal',
                        color: '#b3b3b3'
                    }}>
                        {desc}
                    </Typography>
                </Box>
                {url && <Box to={url} component={Link} sx={{
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
                </Box>}
            </Grid>
            <Grid container spacing={2} >
                {items?.slice(0, 6).map((item, index) => (
                    <Grid key={index} item xl={2} lg={2} md={4} sm={6} xs={6}>
                        <MainCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box >
    ) : <div />
}
