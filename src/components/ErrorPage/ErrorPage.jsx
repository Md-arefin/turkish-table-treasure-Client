import React from 'react';
import { Link } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Button from 'react-bootstrap/Button';
import './ErrorPage.css'


const ErrorPage = () => {
    return (
        <div className='one'>
            <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_6nmazhqu.json"
                style={{ height: '800px', width: '800px', borderRadius:'20px' }}
            >
                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <Link to='/' className='mt-5'>
            <Button variant="success home">Back to Home</Button>
                </Link>
        </div>
    );
};

export default ErrorPage;