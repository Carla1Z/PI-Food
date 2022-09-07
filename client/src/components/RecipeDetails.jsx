import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRecipesById } from "../redux/actions";

export default function RecipeDetails({
  image,
  title,
  dishTypes,
  diets,
  sumary,
  healthScore,
  analyzedInstructions,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);

  const recipeDetails = useSelector((state) => state.detail);
  console.log(recipeDetails);

  return (
    <div>
        <h1>Holi</h1>
        <h2>Nombre: {recipeDetails[0].title}</h2>
        <img src={recipeDetails[0].image} alt='food'/>
        <h4>healthScore: {recipeDetails[0].healthScore}</h4>
        <h4>Tipo de plato: {recipeDetails[0].dishTypes}</h4>
        <h4>Dieta: {recipeDetails[0].diets}</h4>
        <h4>Resumen: {recipeDetails[0].summary}</h4>
        <h4>Paso a paso: {recipeDetails[0].analyzedInstructions}</h4> 
      {/* <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt='food' />
        <h4>{recipeDetails.dishTypes}</h4>
        <h4>{recipeDetails.diets}</h4>
        <p>{recipeDetails.sumary}</p>
        <h4>{recipeDetails.healthScore}</h4>
        <p>{recipeDetails.analyzedInstructions}</p> */}
    </div>
  );
}

//   return (
//     <div className="details" key={id}>
//       <div className="divimg">
//         <img
//           className="detailImg"
//           src={
//             recipeDetails.image
//               ? recipeDetails.image
//               : "https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"
//           }
//           alt="Pic not found"
//         />
//       </div>

//       <h1 className="texts">{recipeDetails.name}</h1>

//       {recipeDetails.dishTypes ? (
//         <div className="ddsh">
//           <h2 className="texts">Dish Type: </h2>
//           {recipeDetails.dishTypes?.map((e) => {
//             return (
//               <h2 className="dishesanddiets" key={e}>
//                 {e}
//               </h2>
//             );
//           })}
//         </div>
//       ) : (
//         <br />
//       )}

//       <div className="ddsh">
//         <h2 className="texts">Diet Type: </h2>
//         {recipeDetails.dietTypes
//           ? recipeDetails.dietTypes.map((e) => {
//               return (
//                 <h2 className="dishesanddiets" key={e}>
//                   {e}
//                 </h2>
//               );
//             })
//           : recipeDetails.diets?.map((e) => {
//               return (
//                 <h2 className="dishesanddiets" key={e.name}>
//                   {e.name}
//                 </h2>
//               );
//             })}
//       </div>

//       <div className="ddsh">
//         <h3 className="texts">Summary: </h3>
//         <p className="summary">
//           {recipeDetails.summary?.replace(/<[^>]*>/g, "")}
//         </p>
//       </div>

//       <div className="ddsh">
//         <h3 className="scores">Score: {recipeDetails.score}</h3>
//         <h3 className="scores">
//           Healthiness points: {recipeDetails.healthScore}
//         </h3>
//       </div>

//       <div className="ddsh">
//         <h3 className="texts">Steps: </h3>
//         <ul className="steps">
//           {Array.isArray(recipeDetails.steps) ? (
//             recipeDetails.steps.map((e) => {
//               return <li key={e.number}>{e.step}</li>;
//             })
//           ) : (
//             <li>{recipeDetails.steps}</li>
//           )}
//         </ul>
//       </div>

//       <Link to="/home">
//         <button className="backButton">Go back to recipes</button>
//       </Link>
//     </div>
//   );
// }

// export default function PageDetail({image, title, dishTypes, diets, sumary, healthScore, analyzedInstructions}){

// image
// title
// dishTypes
// diets
// sumary
// healthScore
// analyzedInstructions
