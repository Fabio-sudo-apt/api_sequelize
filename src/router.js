const express = require("express");
const EmpresaController = require("./controllers/EmpresaController");

const router = express.Router();

router.get("/teste", (req, res) => {
  res.status(200).json({});
});

router.post("/empresas", (req, res) => EmpresaController.create(req, res));

router.post("/calculo", (req, res) => EmpresaController.calculate(req, res));

module.exports = router;
