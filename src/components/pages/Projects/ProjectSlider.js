import React from 'react';
import '../pageElements.css';

class ProjectSlider extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = 'projectSlider'
                onMouseOver={() => this.props.hoverHandle(this.props.text)} 
                onMouseLeave = {()  => this.props.hoverHandle(null)}>  
                <a href={"http://www.github.com/dantemazza/" + this.props.link}>
                    <span style={{fontSize: 35}}><b>{this.props.title}</b></span>
                    <br />
                    {this.props.desc}
                </a>
            </div>
        );
    }
}

export default ProjectSlider;  