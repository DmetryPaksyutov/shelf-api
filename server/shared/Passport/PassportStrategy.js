const passportJWT = require('passport-jwt');
const config = require('../../../bin/config');
const User = require('../../moduls/Users/User.model');

const applyPassportStrategy = passport => {
    const options = {};
    options.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
    options.secretOrKey = config.secret;
    console.log(1);
    passport.use(
        new passportJWT.Strategy(options, async (payload, done) => {
            try {
                const userData = await User.findOne({email: payload.email}, {['_id']: 1, email: 1})

                if (userData) {

                    let user = {id: userData['_id'], email: userData.email, login: userData.login, image: userData.image};
                    console.log(user);

                    return done(null, user);
                }
            }
            catch (e) {
                return done(e, false);
            }


            return done(null, false);
        })
    );
};


module.exports = applyPassportStrategy;