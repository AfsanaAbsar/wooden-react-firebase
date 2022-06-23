import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './LogIn.css'
const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleFormSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }

    const navigateRegister = e => {
        navigate('/register')
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='w-25 m-auto mt-5'>
            <h2 className='text-dark text-center mb-4 mt-5'>Please Log In</h2>
            <Form onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Your Password" />
                </Form.Group>

                <Button variant="dark w-100" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-4'>New To WOODEN? <span onClick={navigateRegister} className='p-2 bg-dark text-white'>Create Your Account</span></p>

            <Social></Social>



        </div>
    );
};

export default LogIn;