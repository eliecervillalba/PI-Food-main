const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/* Atributos del modelo recipe (receta):
  id: id de la receta / UUID / PRIMARY KEY
  name: nombre de la receta / STRING
  summary: resumen del plato / TEXT
  score: puntuación / FLOAT
  healthScore: Nivel de "comida saludable" / FLOAT
  steps: paso a paso / ARRAY
  image: imagen del plato / TEXT  
 */

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: { min: 0, max: 100 },
    },
    healthScore: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: { min: 0, max: 100 },
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });
};
