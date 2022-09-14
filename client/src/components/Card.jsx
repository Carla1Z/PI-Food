import { Link } from "react-router-dom";
import styles from "./css/Card.module.css";

export default function Card({ image, title, diets }) {
  return (
      <div className={styles.card}>
          <h3>{title}</h3>
          <img src={image} alt="recipe" />
          <h5>{diets}</h5>
      </div>
  );
}

// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
