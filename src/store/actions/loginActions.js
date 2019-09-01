export const login = (className) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN', className });
  }
}