import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import useSpotifyData from '../utils/useSpotifyData';
import Helmet from '../components/Helmet'
import Details from '../components/Details'
import Header from '../components/layout/Header'
import TracksSection from '../components/sections/TracksSection'
import CardSection from '../components/sections/CardSection'
import BackgroundColor from '../components/BackgroundColor'
import { Box } from '@mui/material'
const Dashboard = () => {
    const { type, id } = useParams();
    const data = useSpotifyData({ type, id })
    useEffect(() => {
        let content = document.querySelector('.container__content')
        content.style.scrollBehavior = 'auto'
        content.scrollTop = 0
        content.style.scrollBehavior = 'smooth'
    }, [type, id])
    return (
        <Helmet title={data.info.name} style={{ position: 'relative' }} >
            <Header />
            <BackgroundColor />
            <Box sx={{ p: 3 }}>
                {data.info && <Details info={data.info} />}
                <Box sx={{ my: 5 }}>
                    {data.info &&
                        <TracksSection items={data.tracks || []} info={data.info} />}
                </Box>
                <Box sx={{ mt: '5rem' }}>
                    {data.albums &&
                        <CardSection items={data.albums.items || []} title={data.albums.title} />
                    }
                    {data.artists &&
                        <CardSection items={data.artists.items || []} title={data.artists.title} />
                    }
                </Box>
            </Box>

        </Helmet >

    );
};
export default Dashboard;


