import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import './Register.css';








const Register = () => {




    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login');
    }





    const handleRegister = event => {
        event.preventDefault();



        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;







    }


    return (
        <div className='register-form'>
            <h2 className='text-center my-5'>Please make a registration at first</h2>
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="" placeholder="Your Name" required />


                <input type="text" name="email" id="" placeholder="Email Address" required />
                <input type="password" name="password" id="" placeholder="Password" required />
                <input type="password" name="confirm-password" id="" placeholder="confirm-password" required />

                <input type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;





