import React from 'react'
import { Container, Box, Button } from '@mui/material'
import { AUTH_URL } from '../utils/spotify'
import Logo from '../assets/images/logo-white.png'
import video from '../assets/images/video-about-us.mp4'

const Login = () => {
     return (
          <Container>
               <Box component="div" className="background-login">
                    <video width='auto' height='100%' loop autoPlay muted >
                         <source src={video} type="video/mp4"></source>
                    </video>
               </Box>
               <Box sx={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4rem',
                    flexDirection: 'column',
               }}>
                    <Box component="img"
                         src={Logo} alt='Logo Spotify'
                         className="logo"
                         sx={{ maxWidth: '380px' }} />
                    <Button
                         variant="contained" href={AUTH_URL}
                         sx={{
                              backgroundColor: 'var(--primary-color)',
                              padding: '.675rem 1.225rem',
                              transition: 'all .45s ease-out',
                              '&:hover': {
                                   backgroundColor: 'var(--primary-color)',
                              }
                         }}>Đăng nhập với Spotify</Button>
                    <Box sx={{
                         backgroundColor: 'rgba(255, 255, 255,  .1)',
                         padding: '1rem 1.25rem',
                         borderRadius: '4px',
                         transition: 'all .3s ease-out',
                         fontWeight: '400',
                         color: '#ccc',
                         '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, .15)',
                         }
                    }}>
                         <Box component="div" sx={{
                              textAlign: 'left',
                              paddingBottom: '.6rem',
                              marginBottom: '1.2rem',
                              borderBottom: '1px solid rgba(255, 255, 255,.1)',
                              fontSize: '1rem'
                         }}>
                              Đăng nhập tài khoản khách
                         </Box>
                         <Box sx={{
                              display: 'flex',
                              gap: '1rem',
                         }}>
                              <Box sx={{
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'flex-end',
                                   justifyContent: 'center',
                                   gap: '.5rem', fontSize: '.975rem'

                              }}>
                                   <Box sx={{ width: 'max-content' }}>Tài khoản:</Box>
                                   <Box sx={{ width: 'max-content' }}>Mật khẩu:</Box>
                              </Box>
                              <Box sx={{
                                   display: 'flex',
                                   flexDirection: 'column',
                                   alignItems: 'flex-start',
                                   justifyContent: 'center',
                                   gap: '.5rem',

                              }}>
                                   <div>example.user3075@gmail.com</div>
                                   <div>user3075</div>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </Container>

     );
};

export default Login;