import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
        );
    }
    if (user) {
        navigate("/home");
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className=' mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 mx-auto d-block'>Google Log In</button>
            </div>
        </div>
    );
};

export default SocialLogin;