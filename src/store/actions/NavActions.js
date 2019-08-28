export const hamburgerClicked = () => {
  return (dispatch) => {
    dispatch({ type: 'HAMBURGER_CLICKED' });
  }
}