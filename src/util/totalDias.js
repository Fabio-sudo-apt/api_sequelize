function totalDias(fim, inicio){
    let data_fim = fim.split("-")[2]
    let data_inicio = inicio.split("-")[2]
    let data_semfinaldeSemana = ((data_fim - data_inicio) + 1) - 8

    return data_semfinaldeSemana;
}

module.exports = totalDias;