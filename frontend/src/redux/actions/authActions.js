export const loginAction = (user) => {
  return {
    type: "LOGIN_ACTION",
    data: user,
  };
};

export const loginSuccessAction = (user) => {
  return {
    type: "LOGIN_SUCCESS_ACTION",
    data: user,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT_ACTION",
  };
};

