import React from 'react';
import '../pageElements.css';

function IntroText(){
    return(
        <div className='introText'>
            <p>
                Former Machine Learning Engineer at <a href="https://www.wisedocs.ai/" target="_blank" rel="noopener noreferrer" className="employerLinks">Wisedocs</a>.
            </p>
            <p>
                Former intern at <a href="https://www.kcm-solutions.com/" className="employerLinks" target="_blank" rel="noopener noreferrer">KCM Solutions</a>, <a href="https://www.sap.com/index.html" className="employerLinks" target="_blank" rel="noopener noreferrer">SAP</a>,&nbsp;
                <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/staff-directory-divisions-and-customer-service/toronto-water/" className="employerLinks" target="_blank" rel="noopener noreferrer">Toronto Water</a>.
            </p>
        </div>
    );
}

export default IntroText;