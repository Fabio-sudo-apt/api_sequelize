require("dotenv").config({path: ".env"});

module.exports = {
  database: process.env.DATABASE,
  username: "root" || process.env.USERNAME,
  password: "1190" || process.env.PASSWORD,
  host: "localhost" || process.env.HOST,
  dialect: process.env.DIALECT,
};
