const database = require("../utils/database");

const obterTodosOsJogos = async () => {
    const query = `SELECT * FROM jogos`;

    const result = await database.query(query);

    return result.rows;
}

const obterJogosPorRodada = async (rodada) => {
    const query = `SELECT * FROM jogos WHERE rodada = '${rodada}'`;

    const result = await database.query(query);

    return result.rows;
}

module.exports = { obterTodosOsJogos, obterJogosPorRodada }