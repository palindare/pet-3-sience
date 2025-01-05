const defaultState = {
    showMenu: false,
  };
  
  export const reducerSliders = (state = defaultState, action) => {
    switch (action.type) {
      case "CHANGE_MENU":
        return { ...state, showMenu: action.payload};
      default:
        return state;
    }
  };
  