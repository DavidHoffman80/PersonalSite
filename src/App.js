import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// COMPONENTS
import NavBar from './components/NavBar';
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <NavBar />
    )
  }
}

export default App;