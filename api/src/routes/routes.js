const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

// https://api.spoonacular.com/recipes/complexSearch?apiKey=6f7d9f7b224d4411a97abba0d56946be&addRecipeInformation=true
// https://api.spoonacular.com/recipes/716426/information?apiKey=6f7d9f7b224d4411a97abba0d56946be

const getRecipes = async (req, res) => {
  // 1. Obtener un listado de las recetas que contengan la palabra ingresada como query parameter.
  // 2.  Si no existe ninguna receta mostrar un mensaje adecuado

  try {
    const allRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    );

    const result = allRecipes.data.result;
    if (result) {
      result.map(async (e) => {
        let id = e.id;
        let name = e.title;
        let summary = e.summary;
        let score = e.spoonacularscore;
        let healthScore = e.healthScore;
        let steps = e.analyzedInstructions;
        let image = e.image;

        let newRecipe = await Recipe.create({
          id,
          name,
          summary,
          score,
          healthScore,
          steps,
          image,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
  res.json(result);
  res.end();
};

const getById = async (req, res) => {
  // 1. Obtener el detalle de una receta en particular
  // 2. Debe traer solo los datos pedidos en la ruta de detalle de receta
  // 3. Incluir los tipos de dieta asociados
};

const getTypes = async (req, res) => {
  // 1. Obtener todos los tipos de dieta posibles
  // 2. En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos  // con los tipos de datos indicados por spoonacular acá

  if (true) {
    // si no tiene info en la bs, agregarla desde la API.
    const allTypes = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=6f7d9f7b224d4411a97abba0d56946be&addRecipeInformation=true"
    );
    res.json(allTypes.data);
  } else {
    // si tiene info en la bd.
  }
};

const getRecipe = async (req, res) => {
  // 1. Recibe los datos recolectados desde el formulario controlado de la ruta de creación   de recetas por body
  // 2. Crea una receta en la base de datos
};

module.exports = {
  getRecipes,
  getById,
  getTypes,
  getRecipe,
};
