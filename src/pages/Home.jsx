import React, { useEffect } from 'react';
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import soundfile from '../assets/music/theluong.mp3';
import { Box } from '@mui/material'

const Home = (props) => {
  
    return (
        <Helmet title="Trang chủ">
            <Header></Header>
            <Box sx={{ p: 3 }} >
                <MainSection
                    title="Đã phát gần đây"
                    desc='Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.'
                />
            </Box>
        </Helmet>

    );
};

export default Home;