const Jogos = require('../repositores/jogos');

const teste = async (ctx) => {
    const result = await Jogos.obterTodosOsJogos();
    console.log(result[0]);
    ctx.body = result;
}

module.exports = { teste };