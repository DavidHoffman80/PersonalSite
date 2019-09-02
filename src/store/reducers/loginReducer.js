const initState = {
  combination: '',
  loginCombinationCorrect: true,
  loginFormInput: {
    user_name_input: false,
    password_input: false
  },
  loginFormInputInfo: {
    user_name_input: '',
    password_input: ''
  }
};

const loginReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN':
      const newState = `${state.combination}${action.className}`;
      if(newState === '12345678') {
        return {
          ...state,
          combination: newState,
          loginCombinationCorrect: true
        }
      } else {
        return {
          ...state,
          combination: newState
        }
      }
    case 'LOGIN_FORM_INPUT_ACTIVE':
      return {
        ...state,
        loginFormInput: {
          ...state.loginFormInput,
          [action.className]: !state.loginFormInput[action.className]
        }
      }
    case 'LOGIN_FORM_INPUT_FOCUS_LOST':
      return {
        ...state,
        loginFormInput: {
          ...state.loginFormInput,
          [action.className]: !state.loginFormInput[action.className]
        }
      }
    case 'LOGIN_FORM_VALUE_CHANGED':
      return {
        ...state,
        loginFormInputInfo: {
          ...state.loginFormInputInfo,
          [action.target]: action.value
        }
      }
    default:
      return state;
  }
}

export default loginReducer;