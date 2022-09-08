import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipesById } from "../redux/actions";

// Error al recargar
export default function RecipeDetails({
  image,
  title,
  dishTypes,
  diets,
  sumary,
  healthScore,
  analyzedInstructions,
}) {
    const { id } = useParams();
    // console.log(useParams());
    // console.log(id);

    const dispatch = useDispatch();
    const recipeDetails = useSelector((state) => state.detail);
  //   console.log(recipeDetails);

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Holi</h1>
      <h2>Nombre: {recipeDetails[0].title}</h2>
      <img src={recipeDetails[0].image} alt="food" />
      <h4>healthScore: {recipeDetails[0].healthScore}</h4>
      <h4>Tipo de plato: {recipeDetails[0].dishTypes}</h4>
      <h4>Dieta: {recipeDetails[0].diets}</h4>
      <h4>Resumen: {recipeDetails[0].summary}</h4>
      <h4>Paso a paso: {recipeDetails[0].analyzedInstructions}</h4>
    </div>
  );
}

// image
// title
// dishTypes
// diets
// sumary
// healthScore
// analyzedInstructions
