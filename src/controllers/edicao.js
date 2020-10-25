const Jogos = require('../repositores/jogos');
const {response} = require('../utils/response');

// edita um jogo
const editarJogo = async (ctx) => {

    const data = ctx.request.body;
    const result = await Jogos.editarJogo(data.id, data.golsCasa, data.golsVisitante);
    return response(ctx, 200, result) ;

}

module.exports = { editarJogo };