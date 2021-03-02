const initialState = {
  darkMode: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      const { darkMode } = action;
      return darkMode;
    default:
      return state;
  }
};
