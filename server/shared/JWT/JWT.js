const jwt = require('jsonwebtoken');
const secret = require('../../../bin/config').secret;

module.exports = {
    createJwt (id, email, pass) {
        return jwt.sign({id, email, pass}, secret, {
            expiresIn: 10000000,
        });
    }
}