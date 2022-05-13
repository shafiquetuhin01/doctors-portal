import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';

import Contact from './Contact';

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
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;