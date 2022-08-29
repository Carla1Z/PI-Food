
export default function Card({image, title, diets}){
    return (
        <div>
            <img src={image} />
            <h3>{title}</h3>
            <h5>{diets}</h5>
        </div>
    )
}

// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)