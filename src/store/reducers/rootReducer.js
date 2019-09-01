import contactReducer from './contactReducer';
import navReducer from './navReducer';
import loginReducer from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  nav: navReducer,
  contact: contactReducer,
  login: loginReducer
});

export default rootReducer;



// const initState = {
//   hamburger: {
//     iconActive: false
//   },
//   contactForm: {
//     first_name_input: false,
//     last_name_input: false,
//     e_mail_input: false,
//     phone_input: false,
//     company_input: false,
//     helpDesc_input: false,
//     submitted: false
//   },
//   contactInfo: {
//     first_name: '',
//     last_name: '',
//     e_mail: '',
//     phone: '',
//     company: '',
//     helpDesc: ''
//   }
// };


  // switch(type) {
  //   case 'INPUT_FOCUS':
  //     return {
  //       ...state,
  //       contactForm: {
  //         ...state.contactForm,
  //         [target]: !state.contactForm[target]
  //       }
  //     }
  //   case 'INPUT_FOCUS_LOST':
  //     return {
  //       ...state,
  //       contactForm: {
  //         ...state.contactForm,
  //         [target]: !state.contactForm[target]
  //       }
  //     }
  //   case 'INPUT_FIELD_CHANGED':
  //     return {
  //       ...state,
  //       contactInfo: {
  //         ...state.contactInfo,
  //         [id]: value
  //       }
  //     }
  //   case 'CONTACT_FORM_SUBMITTED':
  //     return {
  //       ...state,
  //       contactForm: {
  //         first_name_input: false,
  //         last_name_input: false,
  //         e_mail_input: false,
  //         phone_input: false,
  //         company_input: false,
  //         helpDesc_input: false,
  //         submitted: true
  //       },
  //       contactInfo: {
  //         first_name: '',
  //         last_name: '',
  //         e_mail: '',
  //         phone: '',
  //         company: '',
  //         helpDesc: ''
  //       }
  //     }
  //   case 'HAMBURGER_CLICKED':
  //     return {
  //       ...state,
  //       hamburger: {
  //         iconActive: !state.hamburger.iconActive
  //       }
  //     }
  //   default:
  //     return state;
  // }