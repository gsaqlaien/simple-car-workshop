import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, img, description, price } = service;
    const navigate = useNavigate();


    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`)

    // }

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='container'>

            <img className="w-100" src={img} alt="" />
            <h2 className=' mt-3 ' >{name}</h2>
            <h3 className='text-warning mt-2'>PRICE: $ {price}</h3>
            <p><small>{description}</small></p>

            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-info'>{name}</button>
        </div>
    );
};

export default Service; <h2>This is Service</h2>