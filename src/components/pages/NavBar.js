import React from 'react';
import './pageElements.css';
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import NavElement from './NavElement'



class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page: Home
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page){
        this.setState({page: page})
        this.props.navHandler(page);
    }

    render(){
        return(
            <ul className = "InfoBar">
                <NavElement handleClick = {this.handleClick} name={Home} current={this.state.page == Home} title="Home"/>
                <NavElement handleClick = {this.handleClick} name={About} current={this.state.page == About} title="About"/>
                <NavElement handleClick = {this.handleClick} name={Experience} current={this.state.page == Experience} title="Experience"/> 
                <NavElement handleClick = {this.handleClick} name={Projects} current={this.state.page == Projects} title="Projects"/>
            </ul>
        );
    }
}

export default NavBar;