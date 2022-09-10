const { Op } = require("sequelize");
const Empresa = require("../models/Empresa");
const Feriado = require("../models/Feriado");
const totalDias = require("../util/totalDias");
const valorHora = require("../util/valoHora");

class Repository {
  async create(body) {
    let { name, cnpj, data_fundacao, valor_hora } = body;
    let empresaExist = await Empresa.findOne({
      where: {
        cnpj: cnpj,
      },
    });
    if (empresaExist) throw new Error("CNPJ ja exister");
    let dados = await Empresa.create({
      name,
      cnpj,
      data_fundacao,
      valor_hora,
    });
    return dados;
  }

  async calcula(body) {
    let { cnpj, data_inicio, data_fim } = body;

    let empresaExist = await Empresa.findOne({
      where: {
        cnpj: cnpj,
      },
    });
    if (!empresaExist) throw new Error("CNPJ não existe");

    let valorFeriado = await Feriado.findAndCountAll({
      where: {
        data_feriado: {
          [Op.between]: [data_inicio, data_fim],
        },
      },
      attributes: ["data_feriado"],
    });

    let diasDaSemana = totalDias(data_fim, data_inicio);

    let result = valorHora(
      diasDaSemana,
      valorFeriado.count,
      empresaExist.valor_hora
    );

    return result;
  }
}

module.exports = new Repository();
