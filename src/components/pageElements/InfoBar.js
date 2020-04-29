import React from 'react';
import linkedin from './images/linkedin.png';
import octocat from './images/octocat.png';
import leetcode from './images/leetcode.png'
import email from './images/email.png'

function InfoBar(){
    return(
        <ul className = "InfoBar">
            <a href="https://www.linkedin.com/in/dante-mazza/"  target="_blank">
                <div className="highlight">
                    <img src={linkedin} className='infoImage'/>
                </div>  
            </a>
            <a href="https://www.github.com/dantemazza/" target="_blank">
                <div className="highlight">
                    <img src={octocat} className='infoImage' />
                </div>
            </a>
            <a href="https://www.leetcode.com/dantemazza/" target="_blank">
                <div className="highlight">
                    <img src={leetcode} className='infoImage'/>
                </div>
            </a>
            <a href="mailto:d2mazza@uwaterloo.ca" target="_blank">
                <div className="highlight">
                    <img src={email} className='infoImage'/>
                </div>
            </a>
        </ul>
    );
}

export default InfoBar;