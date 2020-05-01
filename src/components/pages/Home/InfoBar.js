import React from 'react';
import InfoBox from './InfoBox';
import linkedin from './images/linkedin.png';
import octocat from './images/octocat.png';
import leetcode from './images/leetcode.png'
import email from './images/email.png'

function InfoBar(){
    return(
        <ul className = "InfoBar"> 
            <InfoBox image={linkedin} link = "https://www.linkedin.com/in/dante-mazza/"/>
            <InfoBox image={octocat} link = "https://www.github.com/dantemazza/"/>
            <InfoBox image={leetcode} link = "https://www.leetcode.com/dantemazza/"/>
            <InfoBox image={email} link = "mailto:d2mazza@uwaterloo.ca"/>
        </ul>
    );
}

export default InfoBar;