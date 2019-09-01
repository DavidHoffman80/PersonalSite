import React, { Component } from 'react';
import { Link } from 'react-scroll';
// CSS
import './Hero.css';

class Hero extends Component {

  render() {
    const { login, LogMeIn } = this.props;
    console.log(login);
    return (
      <div className='Hero' id='Hero'>
        <div className='HeroInitiative'>
          <h1>Custom Web</h1>
          <h1>Development</h1>
          <h1>for your Business</h1>
        </div>
        <div className='HeroInitiativeSlogan'>
          <h2><span className='1' onClick={LogMeIn}>I</span>ntuitively human-centered web desig<span className='2' onClick={LogMeIn}>n</span> <span className='3' onClick={LogMeIn}>f</span>or a digital world</h2>
        </div>
        <div className='SeeMoreBtn'>
          <Link
            activeClass='active'
            to='About'
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >See More  <i className="fas fa-chevron-down"></i></Link>
        </div>
      </div>
    )
  }
}

export default Hero;