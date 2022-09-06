// import { useState } from "react"
// import { getOrderAbc } from "../redux/actions"

// export default function Order({setCurrentPage, dispatch}){
//     const [orden, setOrden]= useState('')

//     function handleSort(e){
//         e.preventDefault()
//         dispatch(getOrderAbc(e.target.value))
//         setCurrentPage(1)
//         // ↑↑↑ esta seteando para que empiece a ordenar el la pagina 1
//         setOrden(`Ordenado ${e.target.value}`)
//         // ↑↑↑
//       }

//   return(
//       <div>
//           <select onChange={(e) => handleSort(e)}>
//               <option value="asc">A - Z</option>
//               <option value="desc">Z - A</option>
//           </select>
//       </div>
//   )
// }