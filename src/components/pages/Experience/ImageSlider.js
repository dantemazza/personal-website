import React from 'react';
import '../pageElements.css';

class ImageSlider extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
    return(
        <div className = 'imageSlider'>
            <img src={this.props.image} 
             onMouseOver={() => this.props.hoverHandle(this.props.image)} 
             onMouseLeave = {() => this.props.hoverHandle(null)}/>
        </div>
    );
    }
}

export default ImageSlider;  