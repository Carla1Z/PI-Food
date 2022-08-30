import { Link } from "react-router-dom";

export default function Card({ image, title, diets }) {
  return (
    <div>
      <Link to="/detail">
        <h3>{title}</h3>
        <img src={image} alt="recipe" />
        <h5>{diets}</h5>
      </Link>
    </div>
  );
}

// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
