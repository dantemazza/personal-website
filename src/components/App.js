import React from 'react';
import Header from './pageElements/Header';
import NavBar from './pageElements/NavBar';
import Home from './pageElements/Home/Home'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
        page: "Home"
    }

    this.navHandler = this.navHandler.bind(this);
  }

  handlePage(){
    if(this.state.page=="Home"){
      return <Home />
    }
  }

  navHandler(page){
    this.setState({page: page});
  }

  render(){
    return (
        <section className = 'page'>    
          <Header />
          <NavBar navHandler = {this.navHandler}/>  
          {this.handlePage()}
        </section>
    );
  }
}

export default App;
