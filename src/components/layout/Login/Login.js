import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginInputFocused, loginInputFocusLost, loginInputValueChanged } from '../../../store/actions/loginActions';
import { signIn } from '../../../store/actions/authActions';

import './Login.css';

class Login extends Component {

  loginInputFocused = (e) => {
    let target = e.target.className;

    if(e.target.value === '') {
      this.props.input_focus(target);
    }
  }

  loginInputFocusLost = (e) => {
    let target = e.target.className;

    if(e.target.value === '') {
      this.props.input_focus_lost(target);
    }
  }

  handleChange = (e) => {
    const target = e.target.className;
    const value = e.target.value;

    this.props.input_value_changed(target, value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    let email = this.props.login_form_input_info.user_name_input;
    let password = this.props.login_form_input_info.password_input
    let credentials = {
      email: email,
      password: password
    }
    if(email !== '' && password !== '') {
      this.props.signIn(credentials);
    }
  }

  render() {
    const { login, login_form_input, login_form_input_info } = this.props;
    console.log('login_form_input: ', login_form_input, 'login_form_input_info: ', login_form_input_info);
    if(!login) return <Redirect to='/' />
    return (
      <div className='Login'>
        <form className='login' onSubmit={this.handleSubmit}>
          <h1 className='loginFormTitle'>LOGIN</h1>
          <div className='form_section'>
            <label className={login_form_input.user_name_input ? 'login_label active' : 'login_label'} htmlFor='user_name'>User name</label>
            <input type='text' className='user_name_input' id='user_name' onChange={this.handleChange} onFocus={this.loginInputFocused} onBlur={this.loginInputFocusLost} value={login_form_input_info.user_name_input} />
          </div>
          <div className='form_section'>
            <label className={login_form_input.password_input ? 'login_label active' : 'login_label'} htmlFor='password'>Password</label>
            <input type='password' className='password_input' id='password' onChange={this.handleChange} onFocus={this.loginInputFocused} onBlur={this.loginInputFocusLost} value={login_form_input_info.password_input} />
          </div>
          <button type='submit' id='loginSubmit' className='loginSubmit'>Submit</button>
        </form>
        <p className='loginFooter'>© Dave Hoffman - 2019</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.loginCombinationCorrect,
    login_form_input: state.login.loginFormInput,
    login_form_input_info: state.login.loginFormInputInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    input_focus: (target) => dispatch(loginInputFocused(target)),
    input_focus_lost: (target) => dispatch(loginInputFocusLost(target)),
    input_value_changed: (target, value) => dispatch(loginInputValueChanged(target, value)),
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);