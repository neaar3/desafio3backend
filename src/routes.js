const Router = require('koa-router');
const router = new Router(); 
const Jogos = require('./repositores/jogos');
const Rodada = require('./controllers/rodada')

router.get("/teste", Rodada.teste);

module.exports = router;