import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center mt-5'>
            <h1>Welcome to Details: {serviceId}</h1>
            <Link to="/checkout">
                <button className='btn-info mt-5 rounded-3 text-white '>
                    Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;