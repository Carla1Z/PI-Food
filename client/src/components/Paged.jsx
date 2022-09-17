import styles from "./css/Paged.module.css";

export default function Paged({ paged, recipesPerPage, allRecipes }) {
  const pageNumber = [];
  console.log("recetas= " + allRecipes);
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className={styles.paged}>
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number}>
              <button className={styles.button} onClick={() => paged(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
