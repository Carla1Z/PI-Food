const { Router } = require("express");
const { Diet } = require("../db");


const dietsRouter = Router();

dietsRouter.get("", async(req, res) => {
    try {
        //creo una variable que busque dentro de la tabla Diets, y luego me las devuelva
        let diets = await Diet.findAll()
        res.status(200).send(diets)
        // res.send("GET de rutas diets")
    } catch (error) {
        console.log("Error en la ruta DIETS= " + error);
    }
})

module.exports = dietsRouter;
