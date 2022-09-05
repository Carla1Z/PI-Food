import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Order from "../components/Order";
import SearchBar from "../components/SearchBar";
import TypeDiet from "../components/TypeDiet";

export default function Home() {
  return (
    <div>
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="form">
        <button>Formulario</button>
      </Link>
      <SearchBar />
      <Order />
      <TypeDiet />
      <h2>Bienvenidos a la superhome✌</h2>
      <Cards />
    </div>
  );
}