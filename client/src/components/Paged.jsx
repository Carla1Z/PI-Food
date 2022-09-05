export default function Paged({paged, recipesPerPage, allRecipes}) {
  const pageNumber = [];
console.log(allRecipes);
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number}>
              <button onClick={() => paged(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}