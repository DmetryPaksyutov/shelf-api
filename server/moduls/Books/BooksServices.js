const BooksRepository = require('./BooksRepository');
const updateBallUser = require('../Users/UsersServices').updateBallUser;


module.exports = {
    async getBooksList (start, end, regex, gener, isStock) {
        let res;
        
        if (isStock) {
            if (regex) {
                if (gener) res = await BooksRepository.getBooksList_Find_Gener_isStock(start, end, regex, gener);
                else res = await BooksRepository.getBooksList_Find_isStock(start, end, regex)
            }
            else {
                if (gener) res = await BooksRepository.getBooksList_Gener_isStock(start, end, gener);
                else res = await BooksRepository.getBooksList_isStock(start, end)
            }
        }
        else {
            console.log(2);
            if (regex) {
                if (gener) res = await BooksRepository.getBooksList_Find_Gener(start, end, regex, gener);
                else res = await BooksRepository.getBooksList_Find(start, end, regex)
            }
            else {
                if (gener) res = await BooksRepository.getBooksList_Gener(start, end, gener);
                else res = await BooksRepository.getBooksList(start, end)
            }
        }

        if (res) return res;
        else return null
    },

    async getComments (id) {
        return await BooksRepository.getComments(id);
    },

    async addComment (id, comment) {
        const res = await BooksRepository.addComment(id, comment);
        if (res) {
            const isUpdateBall = await updateBallUser(comment.id, 1);
            return isUpdateBall
        }
        return {error : "AddCommentError", status : false}
    },

    async addBall (id, ball) {
        return await BooksRepository.addBall(id, ball);
    }
    
}