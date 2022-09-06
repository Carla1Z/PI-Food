import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getOrderAbc, getRecipes } from "../redux/actions";
import Card from "./Card";
import styles from "./css/Cards.module.css";
import Paged from "./Paged";

export default function Cards() {
  const dispatch = useDispatch();
  //El useEffect se va a encargar de despachar la accion getRecipes, haciendo uso del dispatch
  // Despachamos con el useEffect, se llena allRecipes y lo traemos en una constante
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  //pedido de estado de redux
  const allRecipes = useSelector((state) => state.recipes);
  // console.log(allRecipes);

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage; // 9
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //0
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  //---------------------
  const [orden, setOrden] = useState("");

  function handleSort(e) {
    e.preventDefault();
    dispatch(getOrderAbc(e.target.value));
    setCurrentPage(1);
    // ↑↑↑ esta seteando para que empiece a ordenar el la pagina 1
    setOrden(`Ordenado ${e.target.value}`);
    // ↑↑↑
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>

      <div>
        <button onClick={prevPage}>Anterior</button>
        <Paged
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paged={paged}
        />
        <button onClick={nextPage}>Siguiente</button>
      </div>

      <div className={styles.cardContainer}>
        {currentRecipes.length > 0 ? (
          currentRecipes.map((r) => {
            return <Card title={r.title} image={r.image} diets={r.diets} />;
          })
        ) : (
          <h3>No han encontrado recetas</h3>
        )}
      </div>
    </div>
  );
}
