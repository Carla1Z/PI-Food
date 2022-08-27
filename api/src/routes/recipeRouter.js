require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const getAllRecipes = require("../controllers/getAllRecipes");
const { API_KEY } = process.env;

const recipeRouter = Router();


recipeRouter.get("/", async (req, res) => {
  try {
    const apiInfo = await getAllRecipes();
    // console.log("console.log de getAllRecipes= " + getAllRecipes());
    res.send("GET de la ruta recipes");
  } catch (error) {
    console.log("Error en la ruta GET ");
  }
});

module.exports = recipeRouter;
