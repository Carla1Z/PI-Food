import { Link } from "react-router-dom";

export default function Form() {
  // const [error, setError] = useState('')

   
  return (
    <div>
      <Link to="/home">
        <button>Inicio</button>
      </Link>
      
      <h2>Formulario de creación de la muerte 😈</h2>
      <form>
        <label>Titulo: </label>
        <input name='title' placeholder='Guiso de fideo moñito' />
        <label>Resumen:</label>
        <input name="summary" />
        <label>Saludable: </label>
        <input name="healthScore" />
        <label>Paso a paso: </label>
        <input name="analyzedInstructions" />
        <button>Enviar receta</button>
      </form>



    </div>
  );
}
