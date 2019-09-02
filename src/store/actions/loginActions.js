export const login = (className) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN', className });
  }
}

export const loginInputFocused = (className) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_FORM_INPUT_ACTIVE', className });
  }
}

export const loginInputFocusLost = (className) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_FORM_INPUT_FOCUS_LOST', className });
  }
}

export const loginInputValueChanged = (target, value) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_FORM_VALUE_CHANGED', target, value });
  }
}