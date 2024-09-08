
const News = require('./New.model');

module.exports = {
    async getNewsList(start, end) {
        try {
            const news = await News.find()
            .skip(start)
            .limit(end - start);
            return news;
        }
        catch (e) {
            console.log(e);
            return null
        }
    },
    

}
