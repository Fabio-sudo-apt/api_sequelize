const { Model, DataTypes } = require("sequelize");

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING(50),
        cnpj: DataTypes.STRING(),
        data_fundacao: DataTypes.STRING(),
        valor_hora: DataTypes.DECIMAL(9, 2),
      },
      {
        sequelize,
        modelName: "empresas",
      }
    );
  }
}

module.exports = Empresa;
