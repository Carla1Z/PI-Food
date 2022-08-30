//objeto JS con 2 propiedades: type y payload(datos)
import axios from "axios";
import { GET_ID, GET_NAME_RECIPE, GET_RECIPES } from "./type";

export function getRecipes() {
  return async (dispatch) => {
    let allRecipes = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: allRecipes.data,
    });
  };
}

export function getRecipesById(id) {
  return async (dispatch) => {
    let allRecipesId = await axios.get("http://localhost:3001/recipes/" + id);
    return dispatch({
      type: GET_ID,
      payload: allRecipesId.data,
    });
  };
}

export function getRecipesName(name) {
  return async (dispatch) => {
    let recipeName = await axios.get(
      "http://localhost:3001/recipes?name=" + name
    );
    return dispatch({
      type: GET_NAME_RECIPE,
      payload: recipeName.data,
    });
  };
}
