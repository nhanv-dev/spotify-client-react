import React, { useState } from 'react';
import { Box, Grid, IconButton, Slider } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ReplayIcon from '@mui/icons-material/Replay';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import AirplaySharpIcon from '@mui/icons-material/AirplaySharp';
import QueueMusicSharpIcon from '@mui/icons-material/QueueMusicSharp';

const Footer = () => {
    const [volume, setVolume] = useState(100);
    // var audio = document.querySelector('#audio');


    return (
        <Grid container sx={{ px: 2 }} alignItems='center' className='footer'>
            <Grid item sm={4}>
                <audio id='audio'></audio>
            </Grid>
            <Grid item sm={4}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        < RepeatIcon sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        < SkipPreviousIcon sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#fff' }} className='button-icon-play' component="span">
                        <PlayCircleIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        <SkipNextIcon sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        <ReplayIcon sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <span>0:00</span>
                    <Slider
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        sx={{ color: '#b3b3b3', flex: '1' }}

                    />
                    <span>4:00</span>
                </Box>
            </Grid>
            <Grid item sm={4}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        < QueueMusicSharpIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        < AirplaySharpIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#b3b3b3' }} component="span">
                        {<VolumeIcon volume={volume} />}
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

const VolumeIcon = (props) => {
    let { volume } = props
    if (volume >= 80) return <VolumeUpIcon />;
    if (volume >= 50) return <VolumeDownIcon />;
    if (volume >= 0) return <VolumeMuteIcon />;
    return <VolumeOffIcon />;

}