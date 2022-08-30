//son funciones que gestionan los actions

import { GET_ID, GET_RECIPES } from "./type";

const initialState = {
  recipes: [],
  detail: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
      case GET_ID:
        return {
          ...state,
          detail: action.payload,
        }
    default:
      return state;
  }
}
