const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;
const ClubsServices = require('./ClubsServices');

module.exports = {
    async getClubsList(req, res) {
        try {
            const {start = 0, end = 10,  name, tags} = req.query;
            const clubsList = await ClubsServices.getClubsList (start, end, name, tags);
            generateServerCode(res, 200, clubsList);
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async createClub (req, res) {
        try {
            const {name, tags=[], image=""} = req.body;
            const id = req.user.id;

            const res = await ClubsServices.createClub(id, name, tags, image);
            if (res.status) {
                generateServerCode(res, 200, {idClub : res.id, ball : res.ball});
            }
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    }

    

    
}