import React, { Component } from 'react';
// COMPONENTS
import NavBar from './components/layout/NavBar/NavBar';
import Hero from './components/layout/Hero/Hero';
import About from './components/layout/About/About';
import Contact from './components/layout/Contact/Contact';
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App' id='App'>
        <NavBar />
        <Hero />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App;