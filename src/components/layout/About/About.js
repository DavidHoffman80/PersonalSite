import React, { Component } from 'react';
// CSS
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='About' id='About'>
        <div className='AboutCard'>
          <h1>Why choose me?</h1>
          <h1>I'm glad you asked!</h1>
        </div>
        <div className='AboutMe'>
          <p>
          My number one goal as a web developer for small to medium sized business' is to make sure you are happy with the digital experience that your customers have.
          </p>
        </div>
      </div>
    )
  }
}

export default About;