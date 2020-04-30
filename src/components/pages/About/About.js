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
                <b><font size="20">Hi!</font></b>
                <p>
                    I'm a sophomore studying Computer Engineering at the University of Waterloo. I chose to pursue an engineering degree to feed my deep love for math and problem-solving.          
                </p>
                <p>
                    School aside, I love learning about tech through personal projects.
                    Outside of tech, I enjoy weightlifting, cooking, and&nbsp; 
                    <a href="https://www.naqt.com/stats/player/index.jsp?contact_id=416423" className="employerLinks" target="_blank">competitive trivia</a>
                    &nbsp;in my leisure time.
                </p>
            </div>
        </div>
    );
}

export default About;  
