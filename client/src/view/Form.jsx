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
          type="text"
          //   value={recipe.title}
          placeholder="Guiso de fideo moñito"
        />
        <label>Resumen:</label>
        <input
          name="summary"
          type="text"
          // value={recipe.summary}
        />
        <label>Saludable: </label>
        <input
          name="healthScore"
          type="text"
          // value={recipe.healthScore}
        />
        <label>Paso a paso: </label>
        <input
          name="analyzedInstructions"
          type="text"
          //   value={recipe.analyzedInstructions}
        />
        <label>Tipo de dieta:</label>
        <div>
          <label>
            <input name="gluten free" type="checkbox" />
            Libre de gluten
          </label>

          <label>
            <input name="dairy free" type="checkbox" />
            Libre de lácteos
          </label>

          <label>
            <input name="lacto ovo vegetarian" type="checkbox" />
            Lacto ovo vegetariano
          </label>

          <label>
            <input name="vegan" type="checkbox" />
            Vegano
          </label>

          <label>
            <input name="paleolithic" type="checkbox" />
            Paleolítico
          </label>

          <label>
            <input name="primal" type="checkbox" />
            Primitivo
          </label>

          <label>
            <input name="whole 30" type="checkbox" />
            Whole 30
          </label>

          <label>
            <input name="pescatarian" type="checkbox" />
            Pescetariano
          </label>

          <label>
            <input name="ketogenic" type="checkbox" />
            Cetogenico
          </label>

          <label>
            <input name="fodmap friendly" type="checkbox" />
            Fodmap friendly
          </label>
        </div>

        <button>Enviar receta</button>
      </form>
    </div>
  );
}
