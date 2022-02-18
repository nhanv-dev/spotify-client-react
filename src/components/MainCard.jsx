import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MainCard(props) {
    const { name, desc, img} = props.item;
    return (
        <Card sx={{ backgroundColor: '#181818', color: '#ffffff', height: '100%'}}>
            <CardActionArea sx={{height: '100%'}}>
                <CardMedia
                    component="img"
                    height="160"
                    width="160"
                    image={img}
                    alt={'Image - '}
                    sx={{
                        px: '16px',
                        pt: '16px',
                        borderRadius: '12px'
                    }}
                />
                <CardContent>
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
                            fontWeight: '400',
                            lineHeight: '22px',
                            height: '44px',
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
    );
}
