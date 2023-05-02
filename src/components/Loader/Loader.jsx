import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Loader = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/private_files/lf30_uyye9ch7.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
    );
};

export default Loader;