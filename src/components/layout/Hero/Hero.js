import React, { Component } from 'react';
import { Link } from 'react-scroll';
import HeroImage from './Hero.jpg';
// CSS
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className='Hero' id='Hero'>
        <div className='HeroInitiative'>
          <h1>Custom Web</h1>
          <h1>Development</h1>
          <h1>for your Business</h1>
        </div>
        <div className='HeroInitiativeSlogan'>
          <h2>Intuitively human-centered web design for a digital world</h2>
        </div>
        <div className='SeeMoreBtn'>
          <Link
            activeClass='active'
            to='About'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >See More  <i class="fas fa-chevron-down"></i></Link>
        </div>
      </div>
    )
  }
}

export default Hero;