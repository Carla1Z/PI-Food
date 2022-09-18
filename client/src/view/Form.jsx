import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../redux/actions";
import styles from "./css/Form.module.css";
import cocinar from '../assets/cocinar.gif'

export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: "",
    analyzedInstruction: "",
    diets: [],
  });

  function controlled(input) {
    let errors = {};
    if (!input.title.trim()) {
      errors.title = "Se requiere un titulo";
    } else if (!input.summary) {
      errors.summary = "Se requiere un resumen";
    } else if (!input.healthScore) {
      errors.healthScore = "Se requiere un nivel de saludable";
    } else if (!input.analyzedInstruction) {
      errors.analyzedInstruction = "Se requieren instrucciones";
    }
    return errors;
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(input);
    setErrors(
      controlled({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  function handleDelete(e) {
    setInput({
      ...input,
      diets: input.diets.filter((el) => el !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(input));
    // alert("Receta creada");
    setInput({
      title: "",
      summary: "",
      healthScore: "",
      analyzedInstruction: "",
      diets: [],
    });
  }

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button className={styles.home}>Volver</button>
      </Link>
      <div className={styles.container}>

      <div className={styles.formContainer}>
        <h1>Crea tu receta!</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.divForm}>
          <div>
            <label>Titulo:</label>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={handleChange}
            />
            {errors.title && <p>{errors.title}</p>}
          </div>
          <div>
            <label>Resumen:</label>
            <input
              type="text"
              value={input.summary}
              name="summary"
              onChange={handleChange}
            />
            {errors.summary && <p>{errors.summary}</p>}
          </div>
          <div>
            <label>Saludable:</label>
            <input
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={handleChange}
            />
            {errors.healthScore && <p>{errors.healthScore}</p>}
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
            {errors.analyzedInstruction && <p>{errors.analyzedInstruction}</p>}
          </div>

          <select onChange={handleSelect}>
            {diets.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </select>

          <div>
            {input.diets.map((el) => (
              <ul>
                <li>
                  {el}
                  <button onClick={() => handleDelete(el)}>X</button>
                </li>
              </ul>
            ))}
          </div>

          <button type="submit">Crear receta</button>
          </div>
        </form>
      </div>

      <div>
        <img src={cocinar} alt='formulario'/>
      </div>
      </div>

    </div>
  );
}
