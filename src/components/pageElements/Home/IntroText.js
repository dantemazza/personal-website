import React from 'react';


function IntroText(){
    return(
        <div class='introText'>
            {/*
            <p>
                Outside of tech, I enjoy weightlifting, cooking, and&nbsp; 
                <a href="https://www.naqt.com/stats/player/index.jsp?contact_id=416423" className="employerLinks" target="_blank">competitive trivia</a>
                &nbsp; in my leisure time.
            </p> */}
            <p>
                Incoming Machine Learning Engineer at <a href="https://www.bht.ai/" target="_blank" className="employerLinks">Bear Health Technologies</a>.
            </p>
            <p>
                Former intern at <a href="https://www.sap.com/index.html" className="employerLinks" target="_blank">SAP</a>,&nbsp;
                <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/staff-directory-divisions-and-customer-service/toronto-water/" className="employerLinks" target="_blank">Toronto Water</a>.
            </p>
        </div>
    );
}

export default IntroText;