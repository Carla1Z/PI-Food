import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  //pedido de estado de redux
  const allRecipes = useSelector((state) => state.recipes);

  return (
    <div>
      {allRecipes.length > 0 ? (
        allRecipes.map((r) => {
          return <Card title={r.title} image={r.image} diets={r.diets} />;
        })
      ) : (
        <h3>No han encontrado recetas</h3>
      )}
    </div>
  );
}
