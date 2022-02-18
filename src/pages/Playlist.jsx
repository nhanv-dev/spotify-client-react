import React from 'react';
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import { useParams } from "react-router-dom";
const Playlist = (props) => {
    const { slug } = useParams();
    return (
        <Helmet title="Playlist" >
            <Header></Header>
            {slug}
        </Helmet>

    );
};

export default Playlist;