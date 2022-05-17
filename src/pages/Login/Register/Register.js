import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Register/Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }
    const handelRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate("/home");
    }

    return (
        <div className='form-container'>
            <h2 className=' text-primary text-center my-3'>Please Register</h2>
            <div className='register-container'>
                <form onSubmit={handelRegister}>
                    <input type="email" name="email" placeholder='Your email' required />
                    <input type="password" name="password" placeholder='Your password' required />
                    <input type="password" name="Confirm Password" placeholder='confirm password' required />
                    <button className='bg-info w-50 mx-auto d-block'>Register</button>
                </form>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;