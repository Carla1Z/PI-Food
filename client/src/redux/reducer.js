//son funciones que gestionan los actions

import { GET_ID, GET_NAME_RECIPE, GET_ORDER_ABC, GET_RECIPES } from "./type";

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
    case GET_ORDER_ABC:
      let sortedRecipes = [...state.recipes]       
      sortedRecipes = action.payload === 'asc' ?
      state.recipes.sort(function(a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      }) :
      state.recipes.sort(function(a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      });          
      return {
        ...state,
        recipes: sortedRecipes
      };
    default:
      return state;
  }
}
