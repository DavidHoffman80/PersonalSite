import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/actions/loginActions';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact';

class HomePage extends Component {

  LogMeIn = (e) => {
    this.props.logMeIn(e.target.className);
  }

  render() {
    let { login, loginAllowed } = this.props;
    const loggingIn = loginAllowed ? <Redirect to='/login' /> : null;

    return (
      <div className='homePage'>
        <Hero login={ login } LogMeIn={ this.LogMeIn } />
        <About login={ login } LogMeIn={ this.LogMeIn } />
        <Contact login={ login } LogMeIn={ this.LogMeIn } />
        { loggingIn }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.combination,
    loginAllowed: state.login.loginCombinationCorrect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logMeIn: (className) => dispatch(login(className))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);