const initState = {
  contactForm: {
    first_name_input: false,
    last_name_input: false,
    e_mail_input: false,
    phone_input: false,
    company_input: false,
    helpDesc_input: false
  },
  contactInfo: {
    first_name: '',
    last_name: '',
    e_mail: '',
    phone: '',
    company: '',
    helpDesc: ''
  }
};

const contactReducer = (state = initState, action) => {
  switch(action.type) {
    case 'INPUT_CLICKED':
      console.log('contact info received!', action.info);
      return {
        ...state,
        contactForm: [...state.contactForm, !state.contactForm[action.info]]
      }
    default:
      console.log('Something');
  }
  return state
}

export default contactReducer;