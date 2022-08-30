//son funciones que gestionan los actions

import { GET_ID, GET_NAME_RECIPE, GET_RECIPES } from "./type";

const initialState = {
  recipes: [],
  totalRecipes: [],
  detail: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        totalRecipes: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_NAME_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
}
