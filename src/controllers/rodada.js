const Jogos = require('../repositores/jogos');
const Code = require('../utils/code');
const Assets = require('../assets/logos')
const {response} = require('../utils/response');

// obtem todos os jogos
const obterJogosPorRodada = async (ctx) => {

        if (ctx.params.rodada < 1 || ctx.params.rodada > 38) {
        return response(ctx, 404, {mensagem: 'rodada não existente'})
        } else {
        const result = await Jogos.obterJogosPorRodada(ctx.params.rodada);
        const tabela = await Code.adicionarBrasao(Assets.brasoes, result)
        return response(ctx, 200, result) ;
        }
    }

module.exports = { obterJogosPorRodada };