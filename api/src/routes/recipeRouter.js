require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;

const recipeRouter = Router();

let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

recipeRouter.get("/", async (req, res) => {
  try {
  // console.log(url);
  let info = await axios.get(url);
  info = info.data.results;
  console.log(info);
  res.send("GET en ruta de recetas");
  } catch (error) {
  console.log("Error en la ruta GET ");
  }
});

module.exports = recipeRouter;
