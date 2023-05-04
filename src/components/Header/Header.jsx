import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Turkish Table Treasure</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                    <Nav.Link href="#">
                        {

                            user ? 
                            <div className='d-flex'>
                                <span className='text-white px-2'>{user.displayName}</span>
                                <div>
                                    <img style={{width:'25px', height:"25px"}} src={user.photoURL} alt="" />
                                </div>
                            </div> : <FaUserGraduate className="text-primary fs-4" />

                        }
                    </Nav.Link>
                    <Nav.Link href="#" className='px-3'>
                        {
                            user ? <Button
                                onClick={handleLogOut}
                                variant='danger'>Logout</Button> :
                                <Link to='/login'>
                                    <Button variant='success'>Login</Button>
                                </Link>
                        }
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;