const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const logger = require("./src/middlewares/logger");
const server = new Koa();
const router = require('./src/routes');
const cors = require('@koa/cors')

const PORT = process.env.PORT || 8081;

server.use(bodyparser());
server.use(cors());
server.use(logger);
server.use(router.routes());


server.listen(PORT, () => console.log('Rodando na porta:', PORT));