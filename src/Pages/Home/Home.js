import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';
import SpecialService from './SpecialService';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <SpecialService />
        </div>
    );
};

export default Home;