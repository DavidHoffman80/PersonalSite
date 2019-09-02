const initState = {
  login_error: null
};

const authReducer = ( state = initState, action ) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login successfull');
      return {
        ...state,
        login_error: null
      }
    case 'LOGIN_FAILURE':
      console.log('login error: ', action.err);
      return {
        ...state,
        login_error: action.err
      }
    default:
      return state;
  }
}

export default authReducer;