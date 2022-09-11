import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const [recipe, setRecipe] = useState({
    title: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Creá tu receta!</h1>
      <form>
        <label>Titulo: </label>
        <input
          name="title"
          value={recipe.title}
          placeholder="Guiso de fideo moñito"
        />
        <label>Resumen:</label>
        <input name="summary" value={recipe.summary} />
        <label>Saludable: </label>
        <input name="healthScore" value={recipe.healthScore} />
        <label>Paso a paso: </label>
        <input
          name="analyzedInstructions"
          value={recipe.analyzedInstructions}
        />
        <button>Enviar receta</button>
      </form>
    </div>
  );
}
