const database = require("../utils/database");

const obterTodosOsJogos = async () => {
    const query = `SELECT * FROM jogos;`;
    const result = await database.query(query);

    return result.rows;
}

const obterJogosPorRodada = async (rodada) => {
    const query = `SELECT * FROM jogos WHERE rodada = '${rodada}' ORDER BY id`;
    const result = await database.query(query);
    
    return result.rows;
}

const obterTimes = async () => {
    const queryTimes = `SELECT DISTINCT time_casa AS nome FROM jogos`;
    const result = await database.query(queryTimes);

    return result.rows;
}

const editarJogo = async (id, golsCasa, golsVisitante) => {
    const query = `UPDATE jogos SET gols_casa = ${golsCasa}, gols_visitante = ${golsVisitante} WHERE id = ${id} RETURNING *`;
    const result = await database.query(query);

    return result.rows;
}

const obterUsers = async (email) => {
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    const result = await database.query(query);

    return result.rows.shift();
}

module.exports = { obterTodosOsJogos, obterJogosPorRodada, obterTimes, editarJogo, obterUsers }