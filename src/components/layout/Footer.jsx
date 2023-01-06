import React, { useState } from 'react';
import { Box, Grid, IconButton, Slider } from '@mui/material'
import {
    PlayCircle, SkipNext, SkipPrevious,
    Replay, Repeat, VolumeUp,
    VolumeDown, VolumeMute, VolumeOff,
    AirplaySharp, QueueMusicSharp
} from '@mui/icons-material/';

const Footer = () => {
    const [volume, setVolume] = useState(100)
    return (
        <Grid container sx={{ px: 2 }} alignItems='center' className='footer'>
            <Grid item sm={4}>

            </Grid>
            <Grid item sm={4}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        < Repeat sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        < SkipPrevious sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#fff' }} className='button--play' component="button">
                        <PlayCircle sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        <SkipNext sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        <Replay sx={{ fontSize: '1.25rem' }} />
                    </IconButton>

                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <Box sx={{
                        color: '#b3b3b3',
                        fontSize: '.9rem',
                        fontWeight: '600',
                        letterSpacing: '.8px'
                    }}>0:00</Box>
                    <Slider
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        sx={{ color: '#b3b3b3', flex: '1' }}

                    />
                    <Box sx={{
                        color: '#b3b3b3',
                        fontSize: '.9rem',
                        fontWeight: '600',
                        letterSpacing: '.8px'
                    }}>0:00</Box>
                </Box>

            </Grid>
            <Grid item sm={4}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        < QueueMusicSharp />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        < AirplaySharp />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="button">
                        {<Volume volume={volume} />}
                    </IconButton>
                    <Box width={70} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end'
                    }}>
                        <Slider
                            size="small"
                            defaultValue={volume}
                            aria-label="Volume"
                            valueLabelDisplay="auto"
                            onChange={e => setVolume(e.target.value)}
                            sx={{ color: '#b3b3b3' }}
                        />

                    </Box>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Footer;

const Volume = (props) => {
    let { volume } = props
    if (volume >= 80) return <VolumeUp sx={{ transition: 'all .3s ease' }} />
    if (volume >= 50) return <VolumeDown sx={{ transition: 'all .3s ease' }} />
    if (volume >= 0) return <VolumeMute sx={{ transition: 'all .3s ease' }} />
    return <VolumeOff sx={{ transition: 'all .3s ease' }} />

}