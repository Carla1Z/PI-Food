//objeto JS con 2 propiedades: type y payload(datos)
import axios from "axios";
import { GET_RECIPES } from "./type";

export function getRecipes() {
  return async (dispatch) => {
    let allRecipes = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: allRecipes.data,
    });
  };
}
