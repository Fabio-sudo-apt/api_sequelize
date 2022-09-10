function valorHora(diasDaSemana, valorFeriado, valor_hora){
    let horas_trabalho = 8

    let result = (((diasDaSemana - valorFeriado) * horas_trabalho) * valor_hora);

    return result.toFixed(2)
}
module.exports = valorHora