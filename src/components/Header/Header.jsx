import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

    const user = useContext(AuthContext);

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

                            user && <h5> <FaUserGraduate className="text-primary fs-4" /> </h5>

                        }
                    </Nav.Link>
                    <Nav.Link href="#" className='px-3'>
                        {
                            user ? <Button variant='danger'>Logout</Button> :
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