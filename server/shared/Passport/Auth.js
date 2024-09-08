const passport = require('passport');

let auth = passport.authenticate('jwt', { session: false });

module.exports = auth;