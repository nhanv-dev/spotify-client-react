import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Playlist from '../pages/Dashboard'
import Collection from '../pages/Collection'
import Genre from '../pages/Genre'
import Layout from '../components/layout/Layout'
import useAuth from '../hooks/useAuth'
import { Box, CircularProgress } from '@mui/material';

const Routes = ({ code }) => {
    const accessToken = useAuth(code);

    return accessToken ? (
        <BrowserRouter>
            <Layout >
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/search' component={Search} />
                    <Redirect exact from="/collection" to="/collection/playlist" />
                    <Route exact path='/collection/:type' component={Collection} />
                    <Route exact path='/genre/:id' component={Genre} />
                    <Route exact path='/:type/:id' component={Playlist} />
                </Switch>
            </Layout>
        </BrowserRouter>
    ) : <Spinner />
}
const Spinner = () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: '0', left: '0',
            bottom: '0', right: '0',
            backgroundColor: '#000'
        }}>
            <Box sx={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5rem',
            }}>
                <Box component="img"
                    src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' alt='Logo Spotify'
                    className="logo"
                    sx={{ maxWidth: '380px', display: 'block' }} />
                <CircularProgress sx={{ color: 'var(--primary-color)' }} />
            </Box>
        </Box>
    )
}
export default Routes