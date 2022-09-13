import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstruction: "",
    diets: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(input);
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>

      <h1>Crea tu receta!</h1>

      <form>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Resumen:</label>
          <input
            type="text"
            value={input.summary}
            name="summary"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Saludable:</label>
          <input
            type="text"
            value={input.healthScore}
            name="healthScore"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Instrucciones:</label>
          <input
            type="text"
            value={input.analyzedInstruction}
            name="analyzedInstruction"
            onChange={handleChange}
          />
        </div>

        <select onChange={handleSelect}>
          {diets.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <span>
          <p>{input.diets.map((el) => ' -' + el )}</p>
        </span>
        <button type="submit">Crear receta</button>
      </form>
    </div>
  );
}
