const jwt = require('jsonwebtoken');
const config = require('./auth');

module.exports = async(req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) return res.status(401).json({
        code: 130,
        message: 'Token de autenticação não existe!'
    });

    const [bearer, token] = auth.split(' ');

    try {
        jwt.verify(token, config.secret, function(err, decode) {
            if (!decode) {
                return res.status(401).json({
                    code: 130,
                    message: 'Token expirado!'
                });
            } else {
                next();
            }
        });
    } catch {
        return res.status(401).json({
            code: 130,
            message: 'Token invalido!'
        });
    }
}