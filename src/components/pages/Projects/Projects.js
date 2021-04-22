import React from 'react';
import '../pageElements.css';
import ProjectSlider from './ProjectSlider'
import booleanSolver from './images/flask_app.png'
import desktopChess from './images/desktop-chess.jpg'
import langram from './images/langram.jpeg'
import matrixPlus from './images/matrix-plus.JPG'
import movieRecommender from './images/movie-recommender.png'
import personalWebsite from './images/personal-website.png'


//title, link, introDesc, image, desc
const content = [
        ["langram", "langram", "Classifying language with machine learning", langram,
         "A model that uses n-gram frequency analysis to detect the language of text. Also my attempt at familiarizing\
          myself with the PyTorch library."
        ],
        ["Desktop Chess", "desktop-chess", "Fully-inclusive chess app", desktopChess,
        "I love chess. I used to play competitively in high school (I wasn't very good) and still do so casually. I wrote this\
        throughout my 1.5hr commute to work and back when I first began learning to code in Winter 2019."
        ],
        ["BooleanSolver", "boolean-solver", "Flask app that simplifies boolean functions", booleanSolver,
        "When my digital logic professor showed us a method for simplifying boolean functions that could be implemented\
        in software, I saw it as a fun way of improving my python over the break! I've recently turned it into a flask app and will soon\
        be deploying it with the domain www.booleansolver.com"
        ],
        ["Movie Recommender", "movie-recommender", "An exploration into collaborative filtering", movieRecommender,
         "Mostly an algorithm implementation project, but I also got introduced to Flask and REST APIs."
        ],
        ["MatrixPlus", "matrix-plus", "A handy tool for matrix calculations", matrixPlus,
         "Intro to Linear Algebra was my favourite first year course."
        ],
        ["This Website", "personal-website", "Diving into front-end web dev", personalWebsite,
         "I love recursion"
        ]
    ]

class Projects extends React.Component{

    constructor(props){
        super(props)
        this.hoverHandle = this.hoverHandle.bind(this);
        this.state = {
            project : null
        }

    }

    hoverHandle(project){
        this.setState({
            project: project
        });
    }

    getContent(){
        if(this.state.project == null){
            return <span style = {{textAlign: "center"}}>A few things I've worked on</span>
        }
        else{
            for(var i=0; i<content.length; i++){
                if(this.state.project == content[i][0]){
                    return <>
                            <img src={content[i][3]} style={{maxWidth: 500}}/>
                            <p>
                                {content[i][4]}
                            </p>
                        </>
                }
            }
        }
    }

    getProject(item){
        return <ProjectSlider title ={item[0]} hoverHandle ={this.hoverHandle} link={item[1]} desc ={item[2]} />
    }

    render(){
        return(
            <div className ="arrowMenu" style={{width: 1160}}>
                <div className ="arrowPic" style={{textAlign: "left", width: 440}}>
                {content.map(y => this.getProject(y))}
                </div>
                <div className= "arrowText">
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

export default Projects;  
