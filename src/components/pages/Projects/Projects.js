import React from 'react';
import '../pageElements.css';
import ProjectSlider from './ProjectSlider'

const content = [
    [
        ["langram", "langram", "Classifying language with machine learning"],
        ["Desktop Chess", "desktop-chess", "Fully-inclusive chess app"],
        ["BooleanSolver", "boolean-solver", "Module for simplifying boolean functions"],
        ["Movie Recommender", "movie-recommender", "An exploration into collaborative filtering"],
        ["MatrixPlus", "matrix-plus", "A handy tool for linear algebra calculations"],
        ["This Website", "personal-website", "Diving into the front-end web dev"]

    ]
]

class Projects extends React.Component{
    //title, link, desc

    constructor(){
        super()
        this.hoverHandle.bind(this);

    }

    hoverHandle(){
    }

    getContent(item){
        console.log(item)
        return <ProjectSlider title ={item[0]} hoverHandle ={this.hoverHandle} link={item[1]} desc ={item[2]} />

    }

    render(){
        return(
            <div className ="arrowMenu">
                <div className ="arrowPic" style={{textAlign: "left"}}>
                {content.map(x => x.map(y => this.getContent(y)))}
                </div>
                <div className= "arrowText">
                    
                </div>
            </div>
        );
    }
}

export default Projects;  
