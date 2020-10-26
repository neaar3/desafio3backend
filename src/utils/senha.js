const bcrypt = require('bcryptjs');

const check = async (senha, hash) => {
    const compare = await bcrypt.compare(senha, hash)
    return compare
};

const encrypt = async (senha) => {
    const hash = await bcrypt.hash(senha, 10);
    return hash
}


module.exports = {encrypt, check}