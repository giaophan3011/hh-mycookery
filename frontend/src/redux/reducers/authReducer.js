const authReducer = (
  state = {
    user: null
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS_ACTION":
      return {
        ...state,
        user: action.data,
      };
    case "LOGOUT_ACTION":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default authReducer;
