import { combineReducers } from "redux";

import newRecipe from "./newRecipe";
import snackBarReducer from "./snackBarReducer";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ newRecipe, snackBarReducer, dialogReducer, authReducer });
export default rootReducer;