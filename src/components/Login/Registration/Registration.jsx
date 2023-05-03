import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("")
    const handleReg = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        console.log(name, email, photo, password, confirmPassword)
        setError('')
        if (password != confirmPassword) {
            setError("Confirm Password does not match")
            return

        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"


    return (
        <div className='my-5 mx-auto container w-50 border p-5 rounded-2'>
            <Form onSubmit={handleReg}>
                <h2 className='text-center text-primary mb-3'>Please Registration!!!</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                    <Form.Label>Photo Url </Form.Label>
                    <Form.Control type="text" placeholder="Enter your photo link..." name='photo' />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm_password' placeholder="Enter your password again..." required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept our Terms and Conditions" />
                </Form.Group>

                <Form.Text className="text-danger">
                <p>{error}</p>
                </Form.Text>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='my-3'>
                Already have an account? <Link to='/login'>Please Login</Link>
            </p>
        </div>
    );
};

export default Registration;