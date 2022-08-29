import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../redux/actions";
import Card from "./Card";

export default function Cards() {
  //pedido de estado de redux
  const allRecipes = useSelector((state) => state.recipes);
  console.log("allRecipes= " + allRecipes);

  const dispatch = useDispatch();

  //El useEffect se va a encargar de despachar la accion getRecipes, haciendo uso del dispatch
  // Despachamos con el useEffect, se llena allRecipes y lo traemos en una constante

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      {allRecipes.length > 0 ? (
        allRecipes.map((r) => (
          <Card image={r.image} title={r.title} diets={r.diets} />
        ))
      ) : (
        <h2>No hay nada</h2>
      )}
    </div>
  );
}
