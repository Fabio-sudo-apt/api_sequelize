function validarData(value) {
  if (!value) return false;
  let formatISO = /(\d{4})[-](\d{2})[-](\d{2})/.test(value);
  return formatISO;
}

module.exports = { validarData };
