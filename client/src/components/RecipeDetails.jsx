import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipesById } from "../redux/actions";
import styles from "./css/recipeDetails.module.css";

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
  console.log(id);

  const dispatch = useDispatch();
  const recipeDetails = useSelector((state) => state.detail);
  //   console.log(recipeDetails);

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <div>
        {recipeDetails.length ? (
          <div className={styles.detail}>
            <h2>{recipeDetails[0].title}</h2>
            <div>
              <figure>
                <img src={recipeDetails[0].image} alt="food" />
                <ul>
                  <li>
                    <b>Tipo de plato:</b> {recipeDetails[0].dishTypes}
                  </li>

                  <li>
                    <b>Health score:</b> {recipeDetails[0].healthScore}
                  </li>

                  <li>
                    <b>Dieta:</b> {recipeDetails[0].diets}
                  </li>
                </ul>
              </figure>

              <h4>Resumen: {recipeDetails[0].summary}</h4>
            </div>
            <h4>Paso a paso: {recipeDetails[0].analyzedInstructions}</h4>
          </div>
        ) : (
          <p>No hay nada</p>
        )}
      </div>
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
