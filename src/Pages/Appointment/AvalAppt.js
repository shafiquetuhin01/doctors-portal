import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvalAppt = ({date}) => {
    const [service, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
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
                    service.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvalAppt;