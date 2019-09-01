import React, { Component } from 'react';
// COMPONENTS
import NavBar from './components/layout/NavBar/NavBar';
import HomePage from './components/layout/HomePage/HomePage';
import LoginPage from './components/layout/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App' id='App'>
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default App;