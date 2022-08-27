const { default: axios } = require("axios");

const { API_KEY } = process.env;

let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

//me creo una constante que me traiga toda la info para la table de recipes
const getAllRecipes = async () => {
  let apiInfo = await axios.get(url);
  apiInfo = apiInfo.data.results;
  // console.log(apiInfo);
  let apiData = apiInfo.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      healthScore: recipe.healthScore,
      summary: recipe.summary,
      analyzedInstructions: recipe.analyzedInstructions[0]?.steps.map(each => { return each.step }),
    };
  });
  console.log(apiData);
  //   return apiData;
};

module.exports = getAllRecipes;
