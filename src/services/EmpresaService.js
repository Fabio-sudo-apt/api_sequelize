const { dadosEmpresa, calculateValidationDados } = require("./validation/empresa");
const Repository = require("../repository/EmpresaRepository");
class EmpresaService {
  async createEmpresa(body) {
    await dadosEmpresa(body);
    let result = await Repository.create(body);
    return result;
  }

  async calculateValue(body){
    await calculateValidationDados(body);
    let result = await Repository.calcula(body);
    return result;
  }
}

module.exports = new EmpresaService();
