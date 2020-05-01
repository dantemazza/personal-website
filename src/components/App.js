import React from 'react';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import Home from './pages/Home/Home'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
        page: Home
    }
    this.navHandler = this.navHandler.bind(this);
  }

  navHandler(page){
    this.setState({page: page});
  }

  render(){
    const Page = this.state.page; 
    return (
        <section className = 'page'>    
          <Header />
          <NavBar navHandler = {this.navHandler}/>  
          <Page />
        </section>
    );
  }
}

export default App;
