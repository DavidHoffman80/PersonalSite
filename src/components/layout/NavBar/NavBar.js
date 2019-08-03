import React, { Component } from 'react';
import Brand from './infinity-symbol-white-transparent-background.png';
//CSS
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar' id='NavBar'>
        <img src={Brand} alt='Infinity symbol - Brand Logo' className='BrandLogo' />
        <h1 className='BrandName'>Dave Hoffman</h1>
        <div className='NavLinks'>
        </div>
      </div>
    )
  }
}

export default NavBar;