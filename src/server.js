const express = require("express");
const app = express();
const router = require("./router");

const db = require("./database/dataSouce");
app.use(express.json());
app.use(router);

db.authenticate()
  .then((doc) => {
    app.listen(3000, () => console.log("Server ON"));
  })
  .catch((error) => {
    console.log(error);
  });
