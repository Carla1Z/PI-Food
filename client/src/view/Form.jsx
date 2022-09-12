import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../redux/actions";

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);


  const [info, setInfo] = useState({
    title: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    diets: [],
  });

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.value]: e.target.value,
    });
    console.log(info);
  }

  function handleSelect(e) {
    setInfo({
      ...info,
      diets: [...info.diets, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(info));
    alert("Personaje creado");
    setInfo({
      title: "",
      summary: "",
      healthScore: "",
      analyzedInstructions: "",
      diets: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Creá tu receta!</h1>

      <form onChange={(e) => handleSubmit(e)}>
        <label>Titulo: </label>
        <input
          name="title"
          type="text"
          value={info.title}
          onChange={handleChange}
          placeholder="Guiso de fideo moñito"
        />
        <label>Resumen:</label>
        <input
          name="summary"
          type="text"
          value={info.summary}
          onChange={handleChange}
        />
        <label>Saludable: </label>
        <input
          name="healthScore"
          type="number"
          value={info.healthScore}
          onChange={handleChange}
        />
        <label>Paso a paso: </label>
        <input
          name="analyzedInstructions"
          type="text"
          value={info.analyzedInstructions}
          onChange={handleChange}
        />
        <label>Tipo de dieta:</label>
        <select onChange={(e) => handleSelect(e)}>
          {diets.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <ul>
          <li>{info.diets.map((el) => el + " ,")}</li>
        </ul>

        <button type="submit">Enviar receta</button>
      </form>
    </div>
  );
}
