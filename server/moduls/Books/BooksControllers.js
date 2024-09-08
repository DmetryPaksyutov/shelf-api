const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;
const BooksServices = require('./BooksServices');

module.exports = {
    async getBooks(req, res) {
        try {
            const {start = 0, end = 10, regex, gener, isStock} = req.query;
            console.log(start, end, regex, gener, isStock);
            const booksList = await BooksServices.getBooksList (start, end, regex, gener, isStock);
            generateServerCode(res, 200, booksList);
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async getComments (req, res) {
        try {
            const { id } = req.query;
            const comments = await BooksServices.getComments(id);
            generateServerCode(res, 200, comments);
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async addComments (req, res) {
        const { id, text } = req.body;
        const comment = {
            id : req.user.id, 
            login : req.user.login, 
            image : req.user.image, 
            text
        }
        try {
            const res = await BooksServices.addComment(id, comment);
            if (res.status) generateServerCode(res, 200, {status : true, ball : res.ball});
            else generateServerCode(res, 400, {}, res.error, res.error, "books");
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async addBall (req, res) {
        try {
            const { id, ball } = req.query;
            const newBallBook = await BooksServices.addBall(id, ball);
            if (newBallBook) generateServerCode(res, 200, {newBallBook : newBallBook});
            else generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    }

    
}