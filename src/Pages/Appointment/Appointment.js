import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import ApptBanner from './ApptBanner';
import AvalAppt from './AvalAppt';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='container mx-auto'>
            <ApptBanner date={date} setDate={setDate}></ApptBanner>
            <AvalAppt date={date}></AvalAppt>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;