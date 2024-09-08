const NewsRepository = require('./NewsRepository');


module.exports = {
    async getNewsList (start, end) {
        return await NewsRepository.getNewsList(start, end);
    },

    
}