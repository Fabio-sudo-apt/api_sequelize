'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.DataTypes.STRING(50)
      },
      cnpj: {
        type: Sequelize.STRING
      },
      data_fundacao: {
        type: Sequelize.STRING
      },
      valor_hora: {
        type: Sequelize.DataTypes.DECIMAL(9, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas');
  }
};