import React from 'react';
import appt from '../../assets/images/doctor.png';
import apptBg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppt = () => {
    return (
        <section style={{background:`url(${apptBg})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block md:block'>
                <img className='mt-[-100px]' src={appt} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h3 className='text-3xl text-white'>Make Appointment Today</h3>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quasi dolor aliquid corrupti, consequatur necessitatibus dolores! Dolore tenetur repellendus amet deleniti totam corrupti id animi, minima reiciendis in omnis fugiat laboriosam rem ad sequi mollitia. Earum cum nihil voluptate ipsam.</p>
                <PrimaryButton >Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppt;