import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MainCard from './MainCard';
export default function MainSection(props) {
    const { items, title, desc, url } = props;
    return (
        <Box sx={{ flexGrow: 1, mb: 4 }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Box sx={{ pb: 2 }}>
                    <Typography gutterBottom variant="h2" component="div" sx={{
                        fontSize: '1.4rem',
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
                <Box href={url} component='a' sx={{
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
            </Grid>
            <Grid container spacing={2} sx={{
            }}>
                {items?.map((item, index) => {
                    return (
                        <Grid key={index} item xs={2} md={2}>
                            <MainCard item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    );
}
