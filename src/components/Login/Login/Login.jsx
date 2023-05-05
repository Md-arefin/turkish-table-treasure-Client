import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    useTitle("Login")

    const [loginError, setLoginError] = useState("")

    const { signIn, signInGooglePopUp, gitLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location)

    const from = location.state?.from?.pathname || '/';


    const handleGoogle = () => {
        signInGooglePopUp()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        // console.log(email, password)

        // Validation start

        setLoginError('')

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            setLoginError("your password should be minimum 8 characters, at least 1 letter and 1 number and 1 special character");
            return;
        }


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message)
                console.log(error);
            })

    }
    const handleGitHub = () => {
        gitLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message)
                console.log(error);
            })
    }

    return (
        <div className='my-5 mx-auto container border p-5 rounded-2'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-center text-primary'>Please Login!!!</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Form.Text className="text-danger">
                    <p>{loginError}</p>
                </Form.Text>

                <Button variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>
            <p className='my-3'>
                New to Turkish Table Treasure? <Link to='/registration'>Please Registration</Link>
            </p>

            <div >
                <img onClick={handleGoogle} className='border curs' style={{ width: '180px', cursor: 'pointer' }} src="https://i.ibb.co/M6sGqDy/GButton.jpg" alt="" />

                <img onClick={handleGitHub} className='border mx-5' style={{ width: '220px', height: '38px', cursor: 'pointer' }} src="https://i.ibb.co/KxxhDhC/sign-in-with-github-button4213654.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;