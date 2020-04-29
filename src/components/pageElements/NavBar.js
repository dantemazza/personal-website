import React from 'react';
import './pageElements.css';

function NavBar(){
    return(
        <ul className = "InfoBar">
            <a href="https://www.linkedin.com/in/dante-mazza/"  target="_blank">
                <div className="navHighlight">
                    Home
                </div>  
            </a>
            <a href="https://www.github.com/dantemazza/" target="_blank">
                <div className="navHighlight">
                    About
                </div>
            </a>
            <a href="https://www.leetcode.com/dantemazza/" target="_blank">
                <div className="navHighlight">
                    Experience
                </div>
            </a>
            <a href="mailto:d2mazza@uwaterloo.ca" target="_blank">
                <div className="navHighlight">
                    Projects
                </div>
            </a>
        </ul>
    );
}

export default NavBar;