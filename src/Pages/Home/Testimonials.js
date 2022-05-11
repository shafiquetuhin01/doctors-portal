import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review:'',
            location:'new york'
        },
        {
            _id:2,
            name:'Robert Brows',
            review:'',
            location:'new york'
        },
        {
            _id:3,
            name:'Andrel Gostav',
            review:'',
            location:'new york'
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-primary text-xl font-bold">Testimonials</h3>
                    <h3 className="text-3xl">What our clients say?</h3>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='my-24  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review=><Review key={review._id} review={review}></Review>)}
            </div>
        </section>
    );
};

export default Testimonials;