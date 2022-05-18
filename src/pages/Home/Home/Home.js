import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Stores from '../Stores/Stores';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stores></Stores>
            <Footer></Footer>
        </div>
    );
};

export default Home;