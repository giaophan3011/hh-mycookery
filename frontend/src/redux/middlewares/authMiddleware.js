import ApiService from "../../services/APIServices";
import {loginSuccessAction} from "../actions/authActions";
import {displayErrorSnackbar} from "../actions/snackBarActions";

export function loginMiddleware(user) {
  return function (dispatch) {
    return ApiService.login(user)
      .then((data) => {
        if (data) {
          dispatch(loginSuccessAction(user));
        } else {
          dispatch(displayErrorSnackbar("Login failed. Invalid username or password."));
        }
      })
      .catch((err) => displayErrorSnackbar(err));
  };
}