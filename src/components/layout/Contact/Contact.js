import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactFormInputFocus, contactFormInputFocusLost, contactFormInfo, contactFormSubmitted } from '../../../store/actions/contactActions';
// CSS
import './Contact.css';

class Contact extends Component {

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
        this.props.input_focus(target);
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
        this.props.focus_lost(target);
      }
    }
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.props.input_changed(id, value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.contact_form_submitted(this.props.contactInfo);
  }

  render() {
    const { contactForm, contactInfo, login, LogMeIn } = this.props;
    console.log(login);
    return (
      <div className='Contact' id='Contact'>
        <div className='ContactFormCont'>
          <form className='ContactForm' onSubmit={this.handleSubmit}>
            <h1 className='ContactFormTitle'>CONTAC<span className='7' onClick={LogMeIn}>T</span> ME</h1>
            <label className='first_name_label label'>
              <input type='text' className='first_name_input' id='first_name' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.first_name} />
              <div className={contactForm.first_name_input ? 'label_first_name active' : 'label_first_name'}>First Name *</div>
            </label>
            <label className='last_name_label label'>
              <input type='text' className='last_name_input' id='last_name' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.last_name} />
              <div className={contactForm.last_name_input ? 'label_last_name active' : 'label_last_name'}>Last Name *</div>
            </label>
            <label className='email_label label'>
              <input type='email' className='e_mail_input' id='e_mail' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.e_mail} />
              <div className={contactForm.e_mail_input ? 'label_email active' : 'label_email'}>E-Mail *</div>
            </label>
            <label className='phone_label label'>
              <input type='tel' className='phone_input' id='phone' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              <div className={contactForm.phone_input ? 'label_phone active' : 'label_phone'}>Phone (123-456-7890) *</div>
            </label>
            <label className='company_label label'>
              <input type='text' className='company_input' id='company' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.company} />
              <div className={contactForm.company_input ? 'label_company active' : 'label_company'}>Company *</div>
            </label>
            <h2 className='helpTitle'>HOW CAN I HELP?</h2>
            <label className='help_label label'>
              <textarea className='helpDesc_input' id='helpDesc' onFocus={this.inputClicked} onBlur={this.focusLost} onChange={this.handleChange} value={contactInfo.helpDesc} />
              <div className={contactForm.helpDesc_input ? 'label_help active' : 'label_help'}>Message *</div>
            </label>
            <button type='submit' id='contactSubmit' className='contactSubmit'>Submit</button>
          </form>
        </div>
        <p className='footer'>© Dav<span className='8' onClick={LogMeIn}>e</span> Hoffman - 2019</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contactForm: state.contact.contactForm,
    contactInfo: state.contact.contactInfo
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    input_focus: (target) => dispatch(contactFormInputFocus(target)),
    focus_lost: (target) => dispatch(contactFormInputFocusLost(target)),
    input_changed: (id, value) => dispatch(contactFormInfo(id, value)),
    contact_form_submitted: (contactInfo) => dispatch(contactFormSubmitted(contactInfo))
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Contact);