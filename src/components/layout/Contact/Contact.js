import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactActions } from '../../../store/actions/contactActions';
// CSS
import './Contact.css';

class Contact extends Component {

  state = {
    first_name_input: false,
    last_name_input: false,
    e_mail_input: false,
    phone_input: false,
    company_input: false,
    helpDesc_input: false,
    first_name: '',
    last_name: '',
    e_mail: '',
    phone: '',
    company: '',
    helpDesc: '',
  }

  inputClicked = e => {
    let target = e.target.className;
    if(
      target === 'first_name_input' ||
      target === 'last_name_input' ||
      target === 'e_mail_input' ||
      target === 'phone_input' ||
      target === 'company_input' ||
      target === 'helpDesc_input'
    ) {
      if(e.target.value === '') {
        this.setState(prevState => {
          return {
            [target]: !prevState[target]
          }
        });
      }
    }
  }

  focusLost = e => {
    let target = e.target.className;
    if(
      target === 'first_name_input' ||
      target === 'last_name_input' ||
      target === 'e_mail_input' ||
      target === 'phone_input' ||
      target === 'company_input' ||
      target === 'helpDesc_input'
    ) {
      if(e.target.value === '') {
        this.setState(prevState => {
          return {
            [target]: !prevState[target]
          }
        });
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.contact_info(this.state);
  }

  render() {
    return (
      <div className='Contact' id='Contact'>
        <div className='ContactFormCont'>
          <h1 className='ContactFormTitle'>CONTACT ME</h1>
          <form className='ContactForm' onSubmit={this.handleSubmit}>
            <label className='first_name_label label'>
              <input type='text' className='first_name_input' id='first_name' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.first_name_input ? 'label_first_name active' : 'label_first_name'}>First Name *</div>
            </label>
            <label className='last_name_label label'>
              <input type='text' className='last_name_input' id='last_name' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.last_name_input ? 'label_last_name active' : 'label_last_name'}>Last Name *</div>
            </label>
            <label className='email_label label'>
              <input type='email' className='e_mail_input' id='e_mail' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.e_mail_input ? 'label_email active' : 'label_email'}>E-Mail *</div>
            </label>
            <label className='phone_label label'>
              <input type='tel' className='phone_input' id='phone' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.phone_input ? 'label_phone active' : 'label_phone'}>Phone *</div>
            </label>
            <label className='company_label label'>
              <input type='text' className='company_input' id='company' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.company_input ? 'label_company active' : 'label_company'}>Company *</div>
            </label>
            <div className='helpTitleCont'>
              <p className='helpTitle'>HOW CAN I HELP?</p>
            </div>
            <label className='help_label label'>
              <textarea className='helpDesc_input' id='helpDesc' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} />
              <div className={this.state.helpDesc_input ? 'label_help active' : 'label_help'}>Message *</div>
            </label>
            <button type='submit' id='contactSubmit' className='contactSubmit'>Submit</button>
          </form>
        </div>
        <p className='footer'>© Dave Hoffman - 2019</p>
      </div>
    )
  }
}

const mapDipatchToProps = (dipatch) => {
  return {
    contact_info: (info) => dipatch(contactActions(info))
  }
}

export default connect(null, mapDipatchToProps)(Contact);