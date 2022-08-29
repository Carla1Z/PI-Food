require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const getAllRecipes = require("../controllers/getAllRecipes");
const { API_KEY } = process.env;

const recipeRouter = Router();

recipeRouter.get("", async (req, res) => {
  const { name } = req.query;
  const apiInfo = await getAllRecipes();
  try {
    if (name) {
      //si existe algo ingresa por query
      // const recipeName = await apiInfo.filter(el => el.title.includes(name))
      //creo una constante que filte en apiInfo, si lo que ingresa por query incluye lo que esta en title
      const recipeName = await apiInfo.filter((el) =>
        el.title.toLowerCase().includes(name.toLowerCase())
      );

      recipeName.length
        ? res.status(200).send(recipeName)
        : res.status(404).send("Recipe not found");
    } else {
      //si no entra nada por query, me devuelve todas las recetas
      res.status(200).send(apiInfo);
    }
  } catch (error) {
    console.log("Error en la ruta recipes= " + error);
  }
});

recipeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apiInfo = await getAllRecipes();
  try {
    if(id){
      const recipesId = apiInfo.filter(el => el.id == id)

      recipesId.length
      ? res.status(200).send(recipesId)
      : res.status(404).send("ID not found");
    }else{
      res.send("ID no valido")
    }
  //  res.send("GET de ruta id")
  } catch (error) {
    console.log("ID no encontrado= " + error);
  }
});

module.exports = recipeRouter;
