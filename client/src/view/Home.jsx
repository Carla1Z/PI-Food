import { Link } from "react-router-dom";
import Cards from "../components/Cards";

export default function Home(){
    return(
        <div>
            <Link to="/">
                <button>Inicio</button>
            </Link>
            <Link to='form'>
                <button>Formulario</button>
            </Link>
            <h2>Bienvenidos a la superhome✌</h2>
            <Cards />
        </div>
    )
}