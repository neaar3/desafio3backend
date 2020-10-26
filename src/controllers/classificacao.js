const Jogos = require('../repositores/jogos');
const Code = require('../utils/code');
const Assets = require('../assets/logos')
const {response} = require('../utils/response');


// obtem todos os jogos
const todosOsJogos = async (ctx) => {
    const result = await Jogos.obterTodosOsJogos();
    const result2 = await Jogos.obterTimes()
    
    const tabela = await Code.adicionarBrasao(Assets.brasoes, result)
    const tabela2 = await Code.obterTabela(tabela, result2)
    return response(ctx, 200, tabela2);
}

module.exports = { todosOsJogos };