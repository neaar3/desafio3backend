const Jogos = require("../repositores/jogos")

const something = async (ctx) => {

    const now = await Example.now();
    ctx.body = now;
}

module.exports = {something};