const Router = require('koa-router');
const router = new Router(); 
const Auth = require('./controllers/auth');
const Rodada = require('./controllers/rodada');
const Edicao = require('./controllers/edicao')
const Classificacao = require('./controllers/classificacao')
const Session = require('./middlewares/session')


router.get("/classificacao", Classificacao.todosOsJogos);
router.get(`/jogos/:rodada`, Rodada.obterJogosPorRodada);
router.post(`/auth`, Auth.autenticar);
router.put(`/jogos`, Session.verify, Edicao.editarJogo);
router.get(`/teste`, Auth.autenticar);

module.exports = router;