const initState = {};

const contactReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_CONTACT_INFO':
      console.log('contact info received!', action.info);
      break;
    default:
      console.log('Something');
  }
  return state
}

export default contactReducer;