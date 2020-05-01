import React from 'react';
import '../pageElements.css';

function InfoBox(props){
    return(
        <a href={props.link} target="_blank">
            <div className="highlight">
                <img src={props.image} className='infoImage'/>
            </div>  
        </a>    
    );
}

export default InfoBox;  