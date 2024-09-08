const updateBallUser = require('../Users/UsersServices').updateBallUser;
const addClubUser = require('../Users/UsersServices').addClub;
const ClubsRepository = require('./ClubsRepository');


module.exports = {
    async getClubsList (start, end, name, tags) {

        let res;
        if (name) {
            if (tags) res = await ClubsRepository.getClubsList_name_tags(start, end, name, tags);
            else res = await ClubsRepository.getClubsList_name(start, end, name);
        }
        else {
            if (tags) res = await ClubsRepository.getClubsList_tags(start, end, tags);
            else res = await ClubsRepository.getClubsList(start, end);
        }
        return res;
    },

    async createClub (id, name, tags, image) {
        let entrants = [id];
        const res = await ClubsRepository.createClub(name, entrants, tags, image);
        const updateBall = await updateBallUser(id, -100);
        
        if (res.status && updateBall.status) {
            const updateClubsUser = await addClubUser(id, res.id);
            
            return {status : true, id : res.id, ball : updateBall.ball}
        }

    },

    async addClub (id, idClub) {

    }

    
}