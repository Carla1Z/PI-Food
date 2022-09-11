const { Router } = require("express");
const { Diet } = require("../db");
const getAllRecipes = require("../controllers/getAllRecipes");

const dietsRouter = Router();

dietsRouter.get("", async (req, res) => {
  try {
    let dietsApi = await getAllRecipes();
    //mapeo la info de la api para que me traiga solo las dietas, y me las devuelva todas en string
    dietsApi = dietsApi.map((el) => el.diets).toString();
    // console.log(dietsApi);
    //hago un split para que
    let dietsSplit = dietsApi.split(",").filter((el) => el != "");
    // console.log(dietsSplit);

    // let deleteDuplicate = dietsSplit.reduce((a, e) => {
    //     if(!a.find(d => d == e)) {
    //         a.push(e)
    //     }
    //     return a
    // }, [])
    // console.log(deleteDuplicate);

    let deleteDuplicate = [...new Set(dietsSplit)];
    console.log(deleteDuplicate);

    //por cada elemento, lo busque en la bd y si no esta lo crea
    deleteDuplicate.forEach((el) => {
      Diet.findOrCreate({
        where: { name: el },
      });
    });

    //creo una variable que busque dentro de la tabla Diets, y luego me las devuelva
    let diets = await Diet.findAll();
    res.send(diets);
  } catch (error) {
    console.log("Error en la ruta DIETS= " + error);
  }
});

module.exports = dietsRouter;
