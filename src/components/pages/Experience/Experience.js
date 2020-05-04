import React from 'react';
import '../pageElements.css';
import ImageSlider from './ImageSlider'
import BHT from './images/bht.png'
import SAP from './images/SAP.png'
import TW from './images/torontowater.jpg'

const experienceContent = [
    [<a href ="images/bht.png" className ="employerLinks">My Resume</a>, 'Hover over the logos to learn about my work experiences!'],
    [<h1>Bear Health Techonologies</h1>, 'Coming Soon!'],
    [<h1>SAP SE</h1>, 'Coming Soon!'],
    [<h1>Toronto Water</h1>, 'Coming Soon!']
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
