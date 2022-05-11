import React from "react";
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whithening from '../../assets/images/whitening.png';
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'',
            img:fluride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'',
            img:whithening
        },
    ];
  return (
    <div className="my-24">
      <div className="text-center uppercase">
        <h1 className="text-primary font-bold text-2xl">Our Services</h1>
        <h1 className="text-5xl">Services We Provide</h1>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
          {
              services.map(service=><Service key={service._id} service={service}></Service>)
          }
      </div>
    </div>
  );
};

export default Services;
