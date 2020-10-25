const bcrypt = require('bcryptjs');
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("B4c0/\/", salt, (err, hash) => {
//         console.log(err, hash)
//     });
// });

const check = async (senha, hash) => {
    const compare = await bcrypt.compare(senha, hash)
    return compare
};

const encrypt = async (senha) => {
    const hash = await bcrypt.hash(senha, 10);
    return hash
}

// (async () => {
//     const hash = await encrypt('vouserdev')
//     const compare = await check('vouserdev', hash)
// })();

module.exports = {encrypt, check}