import React from 'react';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid';
const Layout = (props) => {
    return (
        <Grid >
            <Grid item container sx={{
                height: '87vh'
            }}>
                <Grid item container xl={2} lg={2} sm={4} display={{ sm: 'block', xs: 'none' }} sx={{
                    height: '87vh'
                }}>
                    <Sidebar />
                </Grid>
                <Grid item container xl={10} lg={10} sm={8} className='content'>
                    {props.children}
                </Grid>
            </Grid>
            <Grid item container sx={{
                height: '13vh'
            }}>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Layout;