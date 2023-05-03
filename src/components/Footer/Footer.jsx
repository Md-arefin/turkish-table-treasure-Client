import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid className='bg-black py-2'>
            <Row>
                <div className='text-center d-flex justify-content-center   align-items-center'>
                    <FaFacebook className='text-primary mx-2' />
                    <FaTwitter className='text-primary mx-2' />
                    <FaLinkedin className='text-primary mx-2' />
                    <FaInstagram className='text-primary mx-2' />
                    <p className='text-white mx-2'>
                      Copyright from Turkey 2023|| Turkish Table Treasure &copy;
                    </p>
                </div>
            </Row>
        </Container>
    );
};

export default Footer;