/*  Archivo: recipe.js
    ¿Qué hace?:
      - guarda en la bd las receta enviada por el formulario.
*/

const { Router } = require("express");
const router = Router();
const { Recipe, Type } = require("../db");

//  POST /recipe:
//  Recibe los datos recolectados desde el formulario controlado de la ruta de creación
//  de recetas por body
//  Crea una receta en la base de datos
router.post("/", async (req, res) => {
  // Destructuración del body
  const {
    title,
    summary,
    spoonacularScore,
    healthScore,
    diets,
    analyzedInstructions,
    image,
    createOwnner,
  } = req.body;
  console.log("body", req.body);

  // dataForAdd es una instancia de la creación de una receta.
  const dataForAdd = await Recipe.create({
    title,
    summary,
    spoonacularScore,
    healthScore,
    diets,
    analyzedInstructions: [{ number: 1, step: analyzedInstructions }],
    image,
    createOwnner,
  });

  console.log(analyzedInstructions);

  diets.map(async (el) => {
    console.log(el);
    const typesDiet = await Type.findAll({
      where: {
        name: el,
      },
    });
    await dataForAdd.addType(typesDiet);
  });

  res.send("Recipe created successfully!");
});

module.exports = router;
