import { Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

export default function Detail() {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {/* <p>Ruta detalle</p> */}
      <RecipeDetails />
    </div>
  );
}
