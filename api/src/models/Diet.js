const { DataTypes } = require("sequelize");

/* Atributos del modelo diet (dieta):
  id: id de la dieta / type: UUID1 / PRIMARY KEY / UNIQUE
  name: nombre de la dieta / STRING
*/

module.exports = (sequelize) => {
  // definir modelo
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.UUID, // para que no colisione con ninguno de la API.
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
