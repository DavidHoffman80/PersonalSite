export const contactActions = (info) => {
  
}

export const contactFormInputFocus = (target) => {
  return (dispatch) => {
    dispatch({ type: 'INPUT_FOCUS', target});
  }
}

export const contactFormInputFocusLost = (target) => {
  return (dispatch) => {
    dispatch({ type: 'INPUT_FOCUS_LOST', target });
  }
}

export const contactFormInfo = (id, value) => {
  return (dispatch) => {
    dispatch({ type: 'INPUT_FIELD_CHANGED', id, value});
  }
}

export const contactFormSubmitted = (contactInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('Contact_Form').add({
      company: contactInfo.company,
      e_mail: contactInfo.e_mail,
      first_name: contactInfo.first_name,
      last_name: contactInfo.last_name,
      phone: contactInfo.phone,
      message: contactInfo.helpDesc
    });
    dispatch({ type: 'CONTACT_FORM_SUBMITTED'});
  }
}