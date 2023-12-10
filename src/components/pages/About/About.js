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
                    I'm a software engineer at Splunk. I completed my degree in Computer Engineering at the University of Waterloo in 2023.        
                </p>
                <p>
                    School aside, I love learning technical skills through side projects.
                    Outside of tech, I enjoy playing basketball, cooking, poker, and&nbsp; 
                    <a href="https://www.naqt.com/stats/player/index.jsp?contact_id=416423" className="employerLinks" target="_blank" rel="noopener noreferrer">competitive trivia</a>
                    &nbsp;in my leisure time.
                </p>
            </div>
        </div>
    );
}

export default About;  
