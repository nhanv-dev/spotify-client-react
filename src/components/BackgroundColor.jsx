import React, { useState } from 'react';
import { Box } from '@mui/material'
function BackgroundColor(props) {
    const colors = [
        '71, 125, 149', '141, 103, 171', '140, 25, 50',
        '141, 103, 171', '230, 30, 50', '30, 50, 100',
        '225, 17, 139', '13, 115, 236', '119, 119, 119',
        '220, 20, 140', '255, 70, 50', '160, 195, 210',
        '186, 93, 7', '45, 70, 185', '175, 40, 150',
        '215, 242, 125', '225, 51, 0', '141, 103, 171',
        '186, 93, 7', '30, 50, 100', '245, 155, 35'
    ]
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
    const [bgColor] = useState(randomColor())
    return props.image ? (
        <Box sx={{
            position: 'absolute',
            top: '-50px', left: '-50px', right: '-50px',
            height: '450px',
            backgroundColor: 'rgb(18,18,18)',
            background: `linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(${bgColor}, .6) 80%, rgb(${bgColor}) 100%)`,
            zIndex: '-2'
        }} />
    ) : (
        <Box sx={{
            position: 'absolute',
            top: '-50px', left: '-50px', right: '-50px',
            height: '450px',
            backgroundColor: 'rgb(18,18,18)',
            background: `linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(${bgColor}, .6) 80%, rgb(${bgColor}) 100%)`,
            zIndex: '-2'
        }} />
    )
}

export default BackgroundColor;