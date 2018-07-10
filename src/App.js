import React, { Component } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
