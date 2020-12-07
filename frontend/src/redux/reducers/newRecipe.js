import {ADD_INGREDIENT} from "../actions/actionTypes";

const ingredientInitialState = {
  ingredient: {
    "name": "",
    "amount": "",
    "unit": "",
  }
}

export default function(state = ingredientInitialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredient: action.payload
      };
    }

    default:
      return state;
  }
}