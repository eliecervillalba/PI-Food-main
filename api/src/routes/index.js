const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typesDietRouter = require("./Diet.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use("/recipes", getRecipes);
//router.use("/recipes/:idRecipe", getById);
router.use("/types", typesDietRouter);
//router.use("/recipe", getRecipe);

module.exports = router;
