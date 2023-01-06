import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material'
const Helmet = props => {
    const title = props.title ? 'Spotify - ' + props.title : 'Spotify';
    document.title = title;
    return (
        <Box sx={{ width: '100%', height: '100%', ...props.style }} >
            {props.children}
        </Box>
    );
};

Helmet.propTypes = {
    title: PropTypes.string,
};

export default Helmet;