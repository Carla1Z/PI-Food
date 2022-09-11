//objeto JS con 2 propiedades: type y payload(datos)
import axios from "axios";
import {
  GET_DIETS,
  GET_ID,
  GET_NAME_RECIPE,
  GET_ORDER_ABC,
  GET_RECIPES,
} from "./type";

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

export function getOrderAbc(payload) {
  return {
    type: GET_ORDER_ABC,
    payload,
  };
}

export function getDiets() {
  return async function (dispatch) {
    let diets = await axios("http://localhost:3001/diets", {});
    return dispatch({
      type: GET_DIETS,
      payload: diets.data,
    });
  };
}

export function postRecipe(payload) {
  return async function (dispatch) {
    let recipe = await axios.post("http://localhost:3001/recipes", payload);
    return recipe;
  };
}
