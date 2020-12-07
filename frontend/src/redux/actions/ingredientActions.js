import {ADD_INGREDIENT} from "./actionTypes";


export const addIngredient = content => ({
  type: ADD_INGREDIENT,
  payload: content
});