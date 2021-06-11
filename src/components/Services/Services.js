import React from "react";
import './Services.css'
import delivery from '../../images/delivery.png';

const Services = () => {
  return (
    <div className="services ml-64 grid grid-cols-3 gap-4 mb-12">
      <div
        className=
        "grid grid-cols-3 gap-2 border-2 shadow-lg p-4"
        >
             <img className="img" src={delivery} alt="" srcset="" />
        <div className="-mx-16 pl-3">
        <h1 className="font-bold">Quick Delivery</h1>
        <p><small><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iste!</i></small></p>
        </div>
       
      </div>
      <div className="grid grid-cols-3 gap-2 border-2 shadow-lg p-4">  
        <img className="img" src={delivery} alt="" srcset="" />
        <div className="-mx-16 pl-3">
        <h1 className="font-bold">Quick Delivery</h1>
        <p><small><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iste!</i></small></p>
        </div>
        </div>
      <div className="grid grid-cols-3 gap-2 border-2 shadow-lg p-4">  <img className="img" src={delivery} alt="" srcset="" />
        <div className="-mx-16 pl-3">
        <h1 className="font-bold">Quick Delivery</h1>
        <p><small><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iste!</i></small></p></div>
    </div>
    </div>
  );
};

export default Services;
