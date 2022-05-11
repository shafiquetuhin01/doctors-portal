import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import MakeAppt from './MakeAppt';
import Services from './Services';
import SpecialService from './SpecialService';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <SpecialService />
            <MakeAppt />
            <Testimonials />
        </div>
    );
};

export default Home;