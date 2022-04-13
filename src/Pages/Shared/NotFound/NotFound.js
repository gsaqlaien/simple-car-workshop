import React from 'react';
import notfound from '../../../images/notfound/notfound.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger  mt-5'>Why do You call me At this time !!!!</h2>
            <img className="w-100 mx-auto" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;