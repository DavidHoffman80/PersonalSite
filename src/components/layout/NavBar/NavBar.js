import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Brand from './infinity-symbol-white-transparent-background.png';
//CSS
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar' id='NavBar'>
        <img src={Brand} alt='Infinity symbol - Brand Logo' className='BrandLogo' />
        <h1 className='BrandName'>Dave Hoffman</h1>
        <ul className='NavLinks'>
          <li>
            <Link
              activeClass='active'
              to='Hero'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='NavItem'
            >Home</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='About'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='NavItem'
            >About</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='Contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='NavItem'
            >Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;