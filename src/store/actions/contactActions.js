export const contactActions = (info) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_CONTACT_INFO', info });
  }
}