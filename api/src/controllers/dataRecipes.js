/*  Archivo: dataRecipes.js
    ¿Qué hace?:
      1. Obtiene los datos de la API Externa Spoonacular.com a través la función getDataApi().
      2. Obtiene los datos de la tabla Recetas a través de la función getDataTable().
      3. Devuelve un arreglo concatenando los datos obtenidos a través de la 
        función getAllData().
*/

require("dotenv").config();
const axios = require("axios");
const { Recipe, Type } = require("../db.js");
const apiRecipes = require("./apiRecipes.json");
const { API_KEY } = process.env;

//  1. Función para Obtiene los datos de la API Externa Spoonacular.com
const getDataApi = async () => {
  try {
    //  apiSpoonacular contiene la respuesta del request.
    // const apiSpoonacular = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    // );

    //  resultApi contien el arreglo de recetas extraido del atributo results
    //  de la API Externa o local
    //const resultApi = apiSpoonacular.data.results; //API Externa.
    const resultApi = apiRecipes.results; //API Local

    //  dataApi contine un nuevo arreglo con datos homologados a los atributos
    //  del modelo recetas.
    const dataApi = await resultApi.map((e) => {
      return {
        id: e.id,
        title: e.title,
        summary: e.summary,
        spoonacularScore: e.spoonacularScore,
        healthScore: e.healthScore,
        diets: e.diets,
        analyzedInstructions: e.analyzedInstructions[0]?.steps,
        image: e.image,
      };
    });
    //  Retornar el nuevo arreglo.
    return dataApi;
  } catch (error) {
    console.log(error);
  }
};

//  2. Obtener los datos de la tabla Recetas
const getDataTable = async () => {
  return await Recipe.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

//  3. Devuelve un arreglo concatenando los datos obtenidos
const getAllData = async () => {
  const dataApi = await getDataApi(); //  toma los datos e la API.
  const dataTable = await getDataTable(); //  toma los datos de la tabla.
  return [...dataApi, ...dataTable]; // retorna la concatenación de datos obtenidos.
};

module.exports = {
  getAllData,
};
