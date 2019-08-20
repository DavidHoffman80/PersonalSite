export const contactActions = (info) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('Contact_Form').add({
      company: info.company,
      e_mail: info.e_mail,
      first_name: info.first_name,
      last_name: info.last_name,
      phone: info.phone,
      message: info.helpDesc
    });
    dispatch({ type: 'ADD_CONTACT_INFO', info });
  }
}