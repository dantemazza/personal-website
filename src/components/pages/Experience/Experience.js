import React from 'react';
import '../pageElements.css';
import ImageSlider from './ImageSlider'
import BHT from './images/bht.png'
import SAP from './images/SAP.png'
import TW from './images/torontowater.jpg'
import Resume from './resume.pdf'

const experienceContent = [
    [<a href ={Resume} className ="employerLinks" target = '_blank' rel="noopener noreferrer">My Resume</a>, 'Hover over the logos to learn about my work experiences!'],
    [<><h1>Machine Learning Engineer</h1><h3>Bear Health Technologies</h3></>, 
    'Building machine learning to solve tough and interesting problems in the clinical documentation industry!'],
    [<><h1>Automation Developer</h1><h3>SAP SE</h3></>,
    'Got to tackle a lot of interesting problems related to QA automation. My primary goal throughout the term was making\
    test suites robust enough to survive version changes, varying response times, and other variables, while providing a foundation\
    of abstraction that the next interns could build upon.'],
    [<><h1>IT Trainee (Business Support)</h1><h3>Toronto Water</h3></>,
    'My first internship was with this branch of the City of Toronto. My focus was on updating business procedures to meet\
    the public sector\'s rigorous auditing standards, which involved a lot of technical documentation and some automation.']
    ]  

class Experience extends React.Component{
    
    constructor(){
        super()
        this.state = {
            title: experienceContent[0][0],
            content: experienceContent[0][1]
        }
        this.hoverHandle = this.hoverHandle.bind(this);

    }

    hoverHandle(company){
        var index = 0;
        if(company == BHT) index = 1;
        else if(company == SAP) index = 2;
        else if(company == TW) index = 3;
        this.setState({
            title: experienceContent[index][0],
            content: experienceContent[index][1]})
        }

    render(){
    return(
        <div className ="arrowMenu">
            <div className ="arrowPic">
                <ImageSlider image={BHT} hoverHandle ={this.hoverHandle}/>
                <ImageSlider image={SAP} hoverHandle ={this.hoverHandle}/>
                <ImageSlider image={TW} hoverHandle ={this.hoverHandle}/>
            </div>
            <div className= "arrowText">
                <p>{this.state.title}</p>
                <p>{this.state.content}</p>
            </div>
        </div>
    );
    }
}

export default Experience;  
