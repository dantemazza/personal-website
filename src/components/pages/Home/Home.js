import React from 'react';
import '../pageElements.css';
import IntroText from './IntroText'
import headshot from './images/UW-headshots-22.jpg'
import InfoBar from './InfoBar';

function Home(){

    return(
        <>
            <img src={headshot} className='headshot'/>
            <IntroText />
            <InfoBar />
        </>
    );
}

export default Home;  
