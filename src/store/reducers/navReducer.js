const initState = {
  hamburger: {
    iconActive: false
  }
};

const authReducer = (state = initState, { type, target, id, value }) => {
  switch(type) {
    case 'HAMBURGER_CLICKED':
      return {
        ...state,
        hamburger: {
          iconActive: !state.hamburger.iconActive
        }
      }
    default:
      return state;
  }
}

export default authReducer;