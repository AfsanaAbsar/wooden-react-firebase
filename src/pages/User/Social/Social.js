import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Social.css'
const Social = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                <div className='bg-dark w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>Or</p>
                <div className='bg-dark w-50' style={{ height: '1px' }}></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn social w-100 mb-4'>Google Sign In</button>
            </div>
            <div>
                <button className='btn social w-100 mb-4'>Github Sign In</button>
            </div>
            <div>
                <button className='btn social w-100 mb-4'>Facebook Sign In</button>
            </div>
        </div>
    );
};

export default Social;