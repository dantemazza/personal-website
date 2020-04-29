import React from 'react';
import './pageElements.css';

class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page: "Home"
        }
    }

    handleClick(page){
        this.setState({page: page})
        this.props.navHandler(page);
    }

    render(){
        return(
            <ul className = "InfoBar">
                <div className="navHighlight">
                    <a href="#" onClick={() => this.handleClick("Home")} style={{ color: this.state.page == "Home" ? "black" : "grey"}} className="navLink">
                        Home
                    </a>
                </div>  
                <div className="navHighlight">
                    <a href="#" onClick={() => this.handleClick("About")} style={{ color: this.state.page == "About" ? "black" : "grey"}} className="navLink">
                        About
                    </a>
                </div>
                <div className="navHighlight">
                     <a href="#" onClick={() => this.handleClick("Experience")} style={{ color: this.state.page == "Experience" ? "black" : "grey"}} className="navLink">
                        Experience
                    </a>
                </div>
                <div className="navHighlight">
                    <a href="#" onClick={() => this.handleClick("Projects")} style={{ color: this.state.page == "Projects" ? "black" : "grey"}} className="navLink">
                        Projects
                    </a>
                </div>
            </ul>
        );
    }
}

export default NavBar;