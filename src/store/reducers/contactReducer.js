const initState = {};

const contactReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_CONTACT_INFO':
      console.log('contact info received!', action.info);
  }
  return state
}

export default contactReducer;