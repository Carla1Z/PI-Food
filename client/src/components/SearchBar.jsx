import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch();

  //setear los hooks useState
//   const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  //function para traer los datos
//   const showData = async () => {
//     const data = getRecipesName();
//     // console.log("data= " + data); 
//     setRecipes(data)
//   };
//   showData()
function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipesName(search));
  }


  //metodo de filtrado


  //funcion de busqueda
//   const searcher = (e) => {
//     setSearch(e.target.value)
//     console.log(e.target);
//   }
function handleInputChange(e) {
  e.preventDefault();
  setSearch(e.target.value);
      console.log(e.target.value);
  }


//   useEffect(() => {
//     showData()
//   }, [])
  //renderizamos la vista

  return (
    <div>
      <input value={search} onChange={(e) => handleInputChange(e)} type="text" placeholder="Recetas..." />
      <button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  );
}