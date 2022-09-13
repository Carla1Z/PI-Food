//son funciones que gestionan los actions

import {
  DIET_FILTER,
  GET_DIETS,
  GET_ID,
  GET_NAME_RECIPE,
  GET_ORDER_ABC,
  GET_RECIPES,
  POST_DIET,
} from "./type";

const initialState = {
  recipes: [],
  totalRecipes: [],
  detail: [],
  diets: [],
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
    case DIET_FILTER:
      let allRecipes = state.totalRecipes;
      let filter =
        action.payload === "diets"
          ? allRecipes
          : allRecipes.filter((el) => {
            return el.diets.includes(action.payload)
          });
          // console.log(filter);
      return {
        ...state,
        recipes: filter,
      };
    case GET_ORDER_ABC:
      let sortedRecipes = [...state.recipes];
      sortedRecipes =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.title < b.title) return 1;
              if (a.title > b.title) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: sortedRecipes,
      };
    case POST_DIET:
      return {
        ...state,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    default:
      return state;
  }
}
