import React from 'react';
import ReactDOMServer from 'react-dom/server'
import './pageElements.css';
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'




class NavElement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false,
        } 
    }
    getColor(){
        if(this.props.current){
            return "black"
        }
        if(this.state.hover){
            return "#555555"
        }
        return "grey"  
    }

    render(){
        return(
            <div className="navHighlight">
                <a href="#" onClick={() => this.props.handleClick(this.props.name)}
                 onMouseOver={() => this.setState({hover : true})}
                 onMouseLeave={() => this.setState({hover : false})}
                 style={{color: this.getColor()}} className="navLink">
                    {this.props.name.name}
                </a>
        </div>      
    );
    }
}

export default NavElement;