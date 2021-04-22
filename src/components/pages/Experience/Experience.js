import React from 'react';
import '../pageElements.css';
import ImageSlider from './ImageSlider'
import BHT from './images/bht.png'
import SAP from './images/SAP.png'
import TW from './images/torontowater.jpg'
import KCM from './images/kcm.png'
import Resume from './resume.pdf'

const experienceContent = [
    [<a href ={Resume} className ="employerLinks" target = '_blank' rel="noopener noreferrer">My Resume</a>, ['Hover over the logos to learn about my work experiences!']],

    [<><h1>Machine Learning Engineer</h1><h3>Bear Health Technologies</h3></>, 
    ["BHT is Toronto-based startup that is transforming the independent medical examination industry. I got to work closely\
    with Dr. Wei Sun on exciting NLP and classification problems, putting our ideas into motion on multiple pipeline components.\
    I got to dive deep into topics including dataset transformation, model training and selection, and software engineering while receiving\
    invaluable mentorship from my senior colleagues.",
    "Despite my use of past-tense, I am continuing part-time to support further advancements!\
    It has been a great experience to work at BHT for almost a year now; one four month internship can only instill so much. I've been\
    able to see projects through and see metrics continually rise while working part-time."]],

    [<><h1>Software Engineer</h1><h3>KCM Solutions Inc.</h3></>, 
    ['KCM Solutions is an IBM-partnered consulting company based in Toronto. My primary project was deploying a Watson Chatbot and writing backend\
    services to implement various functionality for users. I also dived deep into Docker and Linux when tasked with creating containerized\
    installations of IBM Cognos, IBM Planning Analytics, and various other enterprise software for internal use on a CentOS server.', 'As the\
    sole developer at the company, I was given extreme ownership over these projects and was left to solve problems completely on my own.\
    The idea of having no mentorship was intimidating at first, but this unique experience helped me grow as a developer, and a problem solver.']],

    [<><h1>Software Developer</h1><h3>SAP SE</h3></>,
    ['Got to tackle a lot of interesting problems related to QA automation. My primary goal throughout the term was making\
    test suites robust enough to survive version changes, varying response times, and other variables, while providing a foundation\
    of abstraction that the next interns could build upon.']],

    [<><h1>IT Trainee (Business Support)</h1><h3>Toronto Water</h3></>,
    ['My first internship was with this branch of the City of Toronto. My focus was on updating business procedures to meet\
    the public sector\'s rigorous auditing standards, which involved a lot of technical documentation and some automation.']]
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
        console.log(index);
        if(company == BHT) index = 1;
        else if(company == KCM) index = 2;
        else if(company == SAP) index = 3;
        else if(company == TW) index = 4;
        this.setState({
            title: experienceContent[index][0],
            content: experienceContent[index][1]})
        }

    render(){
    var paragraphs = []
    for(var i=0; i<this.state.content.length; i++){
        paragraphs.push(<p>{this.state.content[i]}</p>);
    }
    return(
        <div className ="arrowMenu">
            <div className ="arrowPic">
                <ImageSlider image={BHT} hoverHandle ={this.hoverHandle}/>
                <ImageSlider image={KCM} hoverHandle ={this.hoverHandle}/>
                <ImageSlider image={SAP} hoverHandle ={this.hoverHandle}/>
                <ImageSlider image={TW} hoverHandle ={this.hoverHandle}/>
            </div>
            <div className= "arrowText">
                <p>{this.state.title}</p>
                {paragraphs}
            </div>
        </div>
    );
    }
}

export default Experience;  
