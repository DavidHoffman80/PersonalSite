import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends Component {
  render() {
    const { login } = this.props;
    if(!login) return <Redirect to='/' />
    return (
      <div className='Login'>
        <h1>Login Page!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.loginCombinationCorrect
  }
}

export default connect(mapStateToProps, null)(Login);