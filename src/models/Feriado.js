"use strict";
const { Model, DataTypes } = require("sequelize");

class Feriado extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        data_feriado: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Feriado",
      }
    );
  }
}

module.exports = Feriado
