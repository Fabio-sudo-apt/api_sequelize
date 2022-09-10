const Yup = require("yup");
const { validarCNPJ } = require("./validationCNPJ");
const { validarData } = require("./validationDataFundacao");

const dadosEmpresa = async (dados) => {
  const schemaValidation = Yup.object().shape({
    name: Yup.string()
      .strict(true)
      .max(50)
      .required("Nome da empresa e obrigatorio"),

    cnpj: Yup.number()
      .test("cnpj invalido", async (value) => {
        let result = validarCNPJ(value.toString());
        return result;
      })
      .required("CNPJ não pode ser vazio!"),

    data_fundacao: Yup.string()
      .test("Data não esta no formato correto.", (value) => {
        let result = validarData(value);
        return result;
      })
      .required("Data de fundação da empresa e obrigatoria"),

    valor_hora: Yup.number().required("Valor hora da empresa e obrigatoria"),
  });

  await schemaValidation.validate(dados);
};

const calculateValidationDados = async (dados) => {
  const schemaValidation = Yup.object().shape({
    cnpj: Yup.number()
      .test("cnpj invalido", async (value) => {
        let result = validarCNPJ(value.toString());
        return result;
      })
      .required("CNPJ não pode ser vazio!"),

    data_inicio: Yup.string()
      .test("Data não esta no formato correto.", (value) => {
        let result = validarData(value);
        return result;
      })
      .required("Data de inicia e obrigatoria"),

    data_fim: Yup.string()
      .test("Data não esta no formato correto.", (value) => {
        let result = validarData(value);
        return result;
      })
      .required("Data de final e obrigatoria"),
  });

  await schemaValidation.validate(dados);
};

module.exports = { dadosEmpresa, calculateValidationDados };
