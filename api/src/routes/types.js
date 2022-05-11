const { Router } = require("express");
const router = Router();
const { Type } = require("../db");
const apiDiet = require("../controllers/apiDiet.json");

// GET /types
router.get("/", async (req, res) => {
  // 2. En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos
  // con los tipos de datos indicados por spoonacular
  apiDiet.results.forEach((e) => {
    Type.findOrCreate({ where: { name: e.name } });
  });

  // 1. Obtener todos los tipos de dieta posibles
  const allTypeDiet = await Type.findAll({ attributes: ["id", "name"] });
  res.json(allTypeDiet);
});

module.exports = router;
