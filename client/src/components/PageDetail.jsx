export default function PageDetail({image, title, dishTypes, diets, sumary, healthScore, analyzedInstructions}){
    return(
        <div>
            <h2>{title}</h2>
            <img src={image} alt='food' />
            <h4>{dishTypes}</h4>
            <h4>{diets}</h4>
            <p>{sumary}</p>
            <h4>{healthScore}</h4>
            <p>{analyzedInstructions}</p>
        </div>
    )
}
// image
// title
// dishTypes
// diets
// sumary
// healthScore
// analyzedInstructions