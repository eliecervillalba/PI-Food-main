/*  Routes File: recipes.js
    ¿Qué hace?:
      - Extrae datos según la función asignada a cada ruta:
        a. Todas la recetas
        b. Filtro de recetas por palabra.
        c. Búsqieda de receta por id.
*/

const { Router } = require("express");
const router = Router();
const { getAllData } = require("../controllers/dataRecipes");

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como
// query parameter. Si no existe ninguna receta mostrar un mensaje adecuado.

router.get("/", async (req, res) => {
  //  Esta ruta es de doble función; sirve para mostrar todos las recetas si
  //  no se especifica nunguna expreión de búsqueda y también para ralizar
  //  filtro de recetas que contengan una palabra en el parámetro query.name.

  try {
    //  expSearch contine la expresión de búsqueda.
    const expSearch = req.query.name;

    // Si expSearch contien el valor de búsqueda, continuar flujo.
    // Sino, enviar de vuelta todas la recetas.
    if (expSearch) {
      // petición que extrae los datos de la API + db.
      const allData = await getAllData();

      // resultSearch contiene nuevo arreglo con el resultado de la búsqueda.
      const resultSearch = allData.filter((e) =>
        e.title.toLowerCase().includes(expSearch.toLocaleLowerCase())
      );

      // si resultSearch contine elemetos se envía de vuelta como json.
      // Sino, enviar mensaje correspondiente
      resultSearch.length
        ? res.status(200).json(resultSearch)
        : res.status(404).send("Recipes name not found!");
    } else {
      res.status(200).send(await getAllData());
    }
  } catch (error) {
    console.log(error);
  }
});

// GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

router.get("/:idRecipe", async (req, res) => {
  try {
    //  expSearch contine la expresión de búsqueda.
    const expSearch = req.params.idRecipe;
    //  allData contiene los datos de la API + db.
    const allData = await getAllData();
    //  resultSearch contiene el resultado del filtro de búsqueda.
    const resultSearch = allData.filter((e) => e.id == expSearch);

    // si resultSearch contine elemetos se envía de vuelta como json.
    // Sino, enviar mensaje correspondiente
    resultSearch.length
      ? res.status(200).json(resultSearch)
      : res.status(404).send("Recipe identifier not found!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
