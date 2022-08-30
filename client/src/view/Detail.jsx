import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageDetail from "../components/PageDetail";

export default function Detail() {
  const detail = useSelector((state) => state.detail);
  return (
    <div>
      <h1>Soy la ruta de detalle</h1>
      <Link to="/home">
        <button>Volver al home</button>
      </Link>
      {detail.length > 0 ? (detail.map((d) => {
        return (
          <PageDetail
            image={d.image}
            title={d.title}
            dishTypes={d.dishTypes}
            diets={d.diets}
            sumary={d.sumary}
            healthScore={d.healthScore}
            analyzedInstructions={d.analyzedInstructions}
          />
        );
      })) : (
        <h3>No hay detalles</h3>
      )}
    </div>
  );
}
