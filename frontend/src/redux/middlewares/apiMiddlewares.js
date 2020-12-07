import ApiService from "../../services/APIServices";
import {displayErrorSnackbar, displaySuccessSnackbar} from "../actions/snackBarActions";

export function createRecipeMiddleware(recipe,user) {
  return function (dispatch) {
    return ApiService.createRecipe(recipe, user)
      .then(response => response.json())
      .then(data=> dispatch(displaySuccessSnackbar("Recipe created successfully!")))
      .catch((err) => displayErrorSnackbar(err));
  };
}

export function addNoteMiddleware(recipe,user) {
  return function (dispatch) {
    return ApiService.editRecipe(recipe, user)
      .then(response => response.json())
      .then(data=> dispatch(displaySuccessSnackbar("Note created successfully!")))
      .catch((err) => displayErrorSnackbar(err));
  };
}