const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;
const NewsServices = require('./NewsServices');

module.exports = {
    async getNewsList(req, res) {
        try {
            const {start = 0, end = 10} = req.query;
            const newsList = await NewsServices.getNewsList (start, end);
            generateServerCode(res, 200, newsList);
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    

    
}