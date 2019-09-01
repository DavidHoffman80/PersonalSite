import React, { Component } from 'react';
import icon1 from './WebApplication2x.png';
import icon2 from './WebDesign2x.png';
// CSS
import './About.css';

class About extends Component {
  render() {
    const { login, LogMeIn } = this.props;
    console.log(login);
    return (
      <div className='About' id='About'>
        <div className='AboutCard'>
          <div className='AboutCardCont'>
            <h1>Why choose me?</h1>
            <h1><span className='4' onClick={LogMeIn}>I</span>'m glad you asked!</h1>
          </div>
        </div>
        <div className='AboutMe'>
          <p>
          My <span className='5' onClick={LogMeIn}>n</span>umber one goal as a web developer for small to medium sized business' is your satisfaction with the final product and to make sure that your customers are happy with their digital experience.
          </p>
        </div>
        <div className='Services'>
          <img className='webAppIcon' src={icon1} alt='Web Development Icon' />
          <h2 className='webAppTitle'>Web Application Design</h2>
          <p className='webAppDesc'>
            Designs that are aesthetically pleasing and a user experience that is nothing short of jubilance.
          </p>
          <img className='frontEndDevIcon' src={icon2} alt='Web Design Icon' />
          <h2 className='frontEndDevTitle'>Front End Development</h2>
          <p className='frontEndDevDesc'>
            Custom front end development that focuses on user experience and responsive des<span className='6' onClick={LogMeIn}>i</span>gn.
          </p>
        </div>
      </div>
    )
  }
}

export default About;