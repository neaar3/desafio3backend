const Jogos = require('../repositores/jogos');
const Code = require('../utils/code');
const {response} = require('../utils/response');


// obtem todos os jogos
const todosOsJogos = async (ctx) => {
    const result = await Jogos.obterTodosOsJogos();
    const result2 = await Jogos.obterTimes()
    
    const tabela = await Code.obterTabela(result, result2)
    return response(ctx, 200, tabela);
}

module.exports = { todosOsJogos };