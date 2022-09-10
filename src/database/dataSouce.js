const Sequelize = require("sequelize");

const Empresa = require("../models/Empresa");

const {
  database,
  username,
  password,
  host,
  dialect,
} = require("../config/databaseConfig");
const Feriado = require("../models/Feriado");

const ConnectingMySql = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

Empresa.init(ConnectingMySql);
Feriado.init(ConnectingMySql);

module.exports =  ConnectingMySql;
