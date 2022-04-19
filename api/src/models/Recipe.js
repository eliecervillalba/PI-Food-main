const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/* Atributos del modelo recipe (receta):
  id: id de la receta / UUID / PRIMARY KEY
  title: nombre o título de la receta / STRING
  summary: resumen del plato / TEXT
  spoonacularScore: puntuación / FLOAT
  healthScore: Nivel de "comida saludable" / FLOAT
  analyzedInstructions: paso a paso / ARRAY
  image: imagen del plato / TEXT  
  createOwnner: identifica si es creado por el usuario / BOOLEAN
 */

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID, // para que no colisione con ninguno de la API.
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      spoonacularScore: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: { min: 0, max: 100 },
      },
      healthScore: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: { min: 0, max: 100 },
      },
      analyzedInstructions: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
      },
      createOwnner: {
        // atributo para identificar las recetas creadas por el usuario, NO API.
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
