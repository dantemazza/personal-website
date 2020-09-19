import React from 'react';
import '../pageElements.css';
import Televised from './televised.jpeg'

function About(){
    return(
        <div className ="aboutContainer">
            <div className="aboutPic">
                <img src={Televised}/>
            </div>
            <div className= "aboutText">
                <b><font size="20">Thanks for stopping by!</font></b>
                <p>
                    I'm a sophomore studying Computer Engineering at the University of Waterloo. I was originally in Chemical Engineering but transferred after becoming interested in software and hardware.        
                </p>
                <p>
                    School aside, I love learning technical skills through side projects.
                    Outside of tech, I enjoy weightlifting, cooking, playing basketball and&nbsp; 
                    <a href="https://www.naqt.com/stats/player/index.jsp?contact_id=416423" className="employerLinks" target="_blank" rel="noopener noreferrer">competitive trivia</a>
                    &nbsp;in my leisure time.
                </p>
            </div>
        </div>
    );
}

export default About;  
