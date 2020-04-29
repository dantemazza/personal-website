import React from 'react';
import './App.css';
import InfoBar from './pageElements/InfoBar';
import Header from './pageElements/Header';
import NavBar from './pageElements/NavBar';
import IntroText from './pageElements/IntroText'
import headshot from './images/UW-headshots-22.jpg'

function App() {
  return (
      <section className = 'page'>    
        <Header />
        <NavBar />
        <img src={headshot} className='headshot'/>
        <IntroText />
        <InfoBar />
      </section>
  );
}

export default App;
