const initState = {
  combination: '',
  loginCombinationCorrect: false
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
    default:
      return state;
  }
}

export default loginReducer;