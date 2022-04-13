import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <h1><small>copyright &copy; {year}</small></h1>
        </footer>
    );
};

export default Footer;