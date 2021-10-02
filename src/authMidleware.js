const jwt = require('jsonwebtoken');
const config = require('./auth');
const { promisify } = require('util');

module.exports = async(req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) return res.status(401).json({
        code: 130,
        message: 'Token de autenticação não existe!'
    });

    const [bearer, token] = auth.split(' ');

    try {
        const decode = await promisify(jwt.verify)(token, config.secret);

        console.log('decode: ' + decode);
        if (!decode) {
            return res.status(401).json({
                code: 130,
                message: 'Token expirado!'
            });
        } else {
            next();
        }
    } catch {
        return res.status(401).json({
            code: 130,
            message: 'Token invalido!'
        });
    }
}