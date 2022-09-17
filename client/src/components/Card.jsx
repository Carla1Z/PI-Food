import styles from "./css/Card.module.css";

export default function Card({ image, title, diets }) {
  return (
      <div className={styles.card}>
          <h3>{title}</h3>
          <img src={image} alt="recipe" />
          <p>{diets}</p>
      </div>
  );
}

// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
