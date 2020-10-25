const {response} = require('../utils/response');
const Jogos = require('../repositores/jogos');
const Edicao = require('./edicao');
const Senha = require('../utils/senha');
const jwt = require("jsonwebtoken")

require('dotenv').config();


const autenticar = async (ctx) => {
    const {email = null, senha = null} = ctx.request.body;
    if(!email || !senha) {
        return response(ctx, 400, {mensagem: 'Pedido mal formatado'})
    }
    const users = await Jogos.obterUsers(email);
    
    if(users) {
        const compare = await Senha.check(senha, users.senha)
        if (compare) {
            const token = jwt.sign({email: users.email}, process.env.JWT_SECRET || 'cubos', {expiresIn: '1h'})
            return response(ctx, 200, {token})
        }
        
    }
    return response(ctx, 200, {mensagem: 'email ou senha incorretos'})
    

} 

module.exports = {autenticar}