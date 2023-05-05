import React, { useContext, useState } from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='res-header'>
                    <div className='d-lg-flex '>
                        <Navbar.Brand className='cs-title' href="/">Turkish Table Treasure</Navbar.Brand>


                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </div>

                    <Nav.Link href="#">
                        {

                            user ?
                                <div className='d-flex'>
                                    <span className='text-white px-2'>{user.displayName}</span>
                                    <div>
                                        <img style={{ width: '25px', height: "25px" }} src={user.photoURL} alt="" />
                                    </div>
                                </div> : <FaUserGraduate className="text-primary fs-4" />

                        }
                    </Nav.Link>
                    <Nav.Link href="#" className='px-3'>
                        {
                            user ? <Button
                                className='cs-btn'
                                onClick={handleLogOut}
                                variant='danger'>Logout</Button> :
                                <Link to='/login' className='cs-btn'>
                                    <Button className='cs-btn' variant='success'>Login</Button>
                                </Link>
                        }
                    </Nav.Link>

                </Container>
            </Navbar >
        </>
    );
};

export default Header;