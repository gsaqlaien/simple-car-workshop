import React from 'react';
import './Service.css';

const Service = ({ service }) => {

    const { name, img, description, price } = service;
    return (
        <div className=' service'>

            <img src={img} alt="" />
            <h2 className=' mt-3 ' >{name}</h2>
            <h3 className='text-warning mt-2'>PRICE: $ {price}</h3>
            <p>{description}</p>

            <button className='btn btn-info'>{name}</button>
        </div>
    );
};

export default Service; <h2>This is Service</h2>