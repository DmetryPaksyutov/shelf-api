const User = require('./User.model');

module.exports = {
    async getUserById (id) {
        try {
            return User.findById(id);
        }
        catch (e) {
            console.log(e);
            return null
        }
    },

    async saveUser (user) {
        await User(user).save();
    },

    async getUserByEmail(email) {
        try {
            //console.log('1-1');
            //return await User.findOne({email}, {['_id'] : 1, login : 1, email : 1, pass : 1,
            //    image : 1, marathon : 1, actualChapter : 1, lastDate  : 1, region : 1});
            return await User.findOne({email} );
            //console.log('1-2');
        }
        catch (e) {
            //console.log('1-3');
            console.log(e);
            return {t : 'error', e}
        }
    },

    async createUser(data) {
        return await  new User(data).save();
    },  

    async updateBall (id, incBall) {
        try {
            const user = await User.findById(id);
        if (!user) {
            return {error : "NoUser", status : false}
        }

        user.ball = Math.max(0, user.ball + incBall);
        await user.save();

        return {status : true, ball : user.ball}
        }
        catch  (e) {
            console.log(e);
            return {error : e, status : false}
        }
    },

    async addClub (id, idClub) {
        try {
            const user = await User.findById(id);
        if (!user) {
            return {error : "NoUser", status : false}
        }

        user.clubs = [...user.clubs, idClub];
        await user.save();

        return {status : true, clubs : user.clubs}
        }
        catch  (e) {
            console.log(e);
            return {error : e, status : false}
        }
    },



    async getProfile(id) {
        try {
            return await User.findById(id, {login : 1, image : 1,  balls : 1});
        }
        catch (e) {
            console.log(e);
            return {t : 'error', e}
        }
    },

    async getFriendsUser(id) {
        try {
            return await User.findById(id, {friends : 1 });
        }
        catch (e) {
            console.log(e);
            return {t : 'error', e}
        }
    },

    async getInfoUsers(ids) {
        try {
            return await User.find(/*{login : 1, image : 1, balls : 1}*/).where('_id').in(ids).exec();
        }
        catch (e) {
            console.log(e);
            return 'error'
        }
    }
}