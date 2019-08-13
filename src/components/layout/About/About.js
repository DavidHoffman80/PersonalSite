import React, { Component } from 'react';
import icon1 from './WebApplication2x.png';
import icon2 from './WebDesign2x.png';
// CSS
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='About' id='About'>
        <div className='AboutCard'>
          <div className='AboutCardCont'>
            <h1>Why choose me?</h1>
            <h1>I'm glad you asked!</h1>
          </div>
        </div>
        <div className='AboutMe'>
          <p>
          My number one goal as a web developer for small to medium sized business' is your satisfaction with the final product and to make sure that your customers are happy with their digital experience.
          </p>
        </div>
        <div className='Services'>
          <img src={icon1} alt='Web Development Icon' />
          <img src={icon2} alt='Web Design Icon' />
          <h2>Web Application Design</h2>
          <h2>Front End Development</h2>
          <p>
            Designs that are aesthetically pleasing and a user experience that is nothing short of jubilance.
          </p>
          <p>
            Custom front end development that focuses on a high satisfaction of user experience and responsive design.
          </p>
        </div>
      </div>
    )
  }
}

export default About;