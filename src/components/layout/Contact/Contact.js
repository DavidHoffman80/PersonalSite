import React, { Component } from 'react';
// CSS
import './Contact.css';

class Contact extends Component {

  state = {
    firstNameInputLabelActive: false,
    lastNameInputLabelActive: false,
    emailInputLabelActive: false,
    phoneInputLabelActive: false,
    companyInputLabelActive: false,
    helpInputLabelActive: false
  }

  inputClicked = e => {
    switch(e.target.className) {
      case 'first_name':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              firstNameInputLabelActive: !prevState.firstNameInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'last_name':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              lastNameInputLabelActive: !prevState.lastNameInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'email':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              emailInputLabelActive: !prevState.emailInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'phone':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              phoneInputLabelActive: !prevState.phoneInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'company':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              companyInputLabelActive: !prevState.companyInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
      }
      case 'helpDesc':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              helpInputLabelActive: !prevState.helpInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      default:
        console.log(e.target.className);
    }
    
  }

  focusLost = e => {
    switch(e.target.className) {
      case 'first_name':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              firstNameInputLabelActive: !prevState.firstNameInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'last_name':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              lastNameInputLabelActive: !prevState.lastNameInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'email':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              emailInputLabelActive: !prevState.emailInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'phone':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              phoneInputLabelActive: !prevState.phoneInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'company':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              companyInputLabelActive: !prevState.companyInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      case 'helpDesc':
        if(e.target.value === '') {
          this.setState(prevState => {
            return {
              helpInputLabelActive: !prevState.helpInputLabelActive
            }
          }, () => console.log(this.state));
          break;
        } else {
          break;
        }
      default:
        console.log(e.target.className);
    }
  }

  render() {
    return (
      <div className='Contact' id='Contact'>
        <div className='ContactFormCont'>
          <h1 className='ContactFormTitle'>CONTACT ME</h1>
          <form className='ContactForm'>
            <label className='first_name_label label'>
              <input className='first_name' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.firstNameInputLabelActive ? 'label_first_name active' : 'label_first_name'}>First Name *</div>
            </label>
            <label className='last_name_label label'>
              <input className='last_name' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.lastNameInputLabelActive ? 'label_last_name active' : 'label_last_name'}>Last Name *</div>
            </label>
            <label className='email_label label'>
              <input className='email' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.emailInputLabelActive ? 'label_email active' : 'label_email'}>E-Mail *</div>
            </label>
            <label className='phone_label label'>
              <input className='phone' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.phoneInputLabelActive ? 'label_phone active' : 'label_phone'}>Phone *</div>
            </label>
            <label className='company_label label'>
              <input className='company' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.companyInputLabelActive ? 'label_company active' : 'label_company'}>Company *</div>
            </label>
            <div className='helpTitleCont'>
              <p className='helpTitle'>HOW CAN I HELP?</p>
            </div>
            <label className='help_label label'>
              <textarea className='helpDesc' onFocus={this.inputClicked} onBlur={this.focusLost} />
              <div className={this.state.helpInputLabelActive ? 'label_help active' : 'label_help'}>Message *</div>
            </label>
          </form>
        </div>
        <p className='footer'>© Dave Hoffman - 2019</p>
      </div>
    )
  }
}

export default Contact;