const EmpresaService = require("../services/EmpresaService");

class EmpresaController {
  async create(req, res) {
    try {
      let result = await EmpresaService.createEmpresa(req.body);
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  }

  async calculate(req, res) {
    try {
      let result = await EmpresaService.calculateValue(req.body);
      res.status(200).json({
        "valor_calculado": result
      });
    } catch (error) {
      res.status(500).json({
        message: error.errors,
      });
    }
  }
}

module.exports = new EmpresaController();
