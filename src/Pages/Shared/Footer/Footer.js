import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center my-5'>
            <h6><small>copyright &copy; {year}</small></h6>
        </footer>
    );
};

export default Footer;