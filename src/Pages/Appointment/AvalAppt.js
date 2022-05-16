
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { parsePath } from 'react-router-dom';
import BookingModal from './BookingModal';
import Service from './Service';

const AvalAppt = ({date}) => {
    const [service, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP')
    useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    return (
        <div className='mx-auto'>
            <h3 className='text-secondary text-center text-2xl'>Please search your available date...</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    service.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} treatment={treatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvalAppt;