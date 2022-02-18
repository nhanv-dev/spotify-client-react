import React from 'react'
import { Box, Button } from '@mui/material'
import { AUTH_URL } from '../custom_hooks/spotify'
const Login = () => {
     return (
          <Box sx={{
               width: 300,
               height: '100vh',
               margin: 'auto',
               display: 'flex',
               flexDirection: 'column',
               gap: '5rem',
               justifyContent: 'center',
               alignItems: 'center'
          }}>
               <img src="./images/logo.png" alt='logo spotify' className="logo" />

               <Button variant="contained" href={AUTH_URL} sx={{ backgroundColor: '#18D860' }}>Đăng nhập với Spotify</Button>
          </Box>

     );
};

export default Login;