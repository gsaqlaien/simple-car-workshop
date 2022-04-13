import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';




const Register = () => {

    const navigateRegister = event => {
        navigate('/login')
    }
    const navigate = useNavigate();

    const handleSubmitRegister = event => {
        event.preventDefault()
    }


    return (
        <div className='register-form'>
            <h2 className='text-center my-5'>Please make a registration at first</h2>
            <form onSubmit={handleSubmitRegister}>

                <input type="text" name="name" id="" placeholder="Your Name" required />


                <input type="text" name="password" id="" placeholder="Email Address" required />
                <input type="text" name="password" id="" placeholder="Password" required />
                <input type="password" name="confirm-password" id="" placeholder="confirm-password" required />

                <input type="submit" value="register" />
            </form>
            <p className='text-center'>Already Have an Account with us ! <span onClick={navigateRegister} className='text-white btn btn rounded btn-info'>Login</span></p>
        </div>
    );
};

export default Register;