const UsersRepository = require('./UsersRepository');
const sha256 = require('sha256');
const myJwt = require('../../shared/JWT/JWT');


module.exports = {

    async registration(login, email, password) {
        //console.log(2);
        const isUser = await UsersRepository.getUserByEmail(email);
        //console.log(isUser)
        if (isUser?.t === 'error') {
            return isUser
        }

        if (isUser) {
            return {t : 'user already exists'}

        }

        if (!isUser) {
            //console.log(3);
            await this.createUser(login, email, password);
            return {t : 'user create'}
        }
    },

    async createUser (login, email, pass) {
        //console.log(4);
        let data = {
        login,
        email,
        password : sha256(pass),
        image : '',
        balls : 0,
        records : [],
        taken : [],
        story : [],
        bookshelf : [],
        clubs : [],
        friends : [],

    }
    return await UsersRepository.createUser(data);
    //console.log(5);
},

    async login (email, pass) {
        const user = await UsersRepository.getUserByEmail(email);
        if (user?.t === 'error') {
            return user
        }
        /*console.log(user);
        console.log(user.pass)
        console.log(email)
        console.log(pass)

        console.log(sha256(pass))*/
        const isPass = user?.pass == sha256(pass)

        console.log(isPass)
        if(!isPass) {
            return {
                t : 'login or pass are not'
            }
        }
        //console.log(3)
        if (user && isPass) {
            const token = myJwt.createJwt(user['_id'], user.email, user.pass);
           const isProveMarathon = user.lastDate == new Date().toLocaleDateString('en-GB');
            const userToReturn = {
                token,
                id : user['_id'],
                email : user.email,
                login : user.login,
                image : user.image,
                marathon : user.marathon,
                isProveMarathon,
                actualChapter : user. actualChapter,
                region : user.region,
            }
            //console.log(4);
            return userToReturn
        }
    },

    async updateBallUser (id, incBall) {
        return await UsersRepository.updateBall(id, incBall);
    }

    
}