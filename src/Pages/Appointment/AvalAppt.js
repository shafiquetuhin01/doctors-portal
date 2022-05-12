import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvalAppt = ({date}) => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('appt.json')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])
    return (
        <div className='mx-auto'>
            <h3 className='text-secondary text-center text-2xl'>Available Appoinment date is:  {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    service.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvalAppt;