import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./css/Cards.module.css";
import Paged from "./Paged";

export default function Cards() {
  //pedido de estado de redux
  const allRecipes = useSelector((state) =>  state.recipes);
  // console.log(allRecipes);

//PAGINADO
const [currentPage, setCurrentPage] = useState(1);
const [recipesPerPage, setRecipesPerPage] = useState(9);

const indexOfLastRecipe = currentPage * recipesPerPage // 9
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage //0
const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) 

const paged = (pageNumber) => {
  setCurrentPage(pageNumber);
};


  return (
    <div>
      <div>
      <Paged
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paged={paged}
      />
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
