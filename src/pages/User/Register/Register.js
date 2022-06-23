import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { useState } from 'react';
const Register = () => {

    const [agreed, setAgreed] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)

    }
    const navigateLogin = e => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div className='w-25 m-auto mt-5'>
            <h2 className='text-dark text-center mb-4 mt-5'>Please Register</h2>
            <Form onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => { setAgreed(!agreed) }} name='terms' type="checkbox" label="Accept Terms And Conditions" />
                </Form.Group>
                <Button disabled={!agreed} variant="dark w-100" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center mt-4'>Already Have An Account? <span onClick={navigateLogin} className='bg-dark text-white p-2'>Please Log In</span></p>
            <Social></Social>

        </div>
    );
};

export default Register;