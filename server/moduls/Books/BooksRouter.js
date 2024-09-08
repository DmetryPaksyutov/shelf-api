const express = require('express');
const auth = require('../../shared/Passport/Auth');
const BooksControllers = require('./BooksControllers');


const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;
const Books = require('./Book.model');

const BooksRouter = express.Router();

BooksRouter.get('', BooksControllers.getBooks);
BooksRouter.get('/comments', BooksControllers.getComments);
BooksRouter.post('/addComment', BooksControllers.addComments);
BooksRouter.get('/addBall', auth, BooksControllers.addBall);

BooksRouter.get('/testCreat', async (req, res) => {
         await new Books({
            
                name: "1Преступление и наказание",
                image: "1Радион.jpg",
                author: "Достоевский, Фёдор Михайлович",
                description: "Роман о молодом человеке, который совершил преступление и о его внутренних терзаниях, о его искуплении и перерождении. Невероятно как человек может быть одновременно жестоким убийцей и сочувствующим человеком, готовым отдать последние деньги на похороны малознакомого пьяницы.",
                isStock: true,
                coutPoints: 0,
                sumPoints: 0,
                genre: "Роман",
                popularity: 0,
                comments: [],
                person: "",
                returnDate: new Date(),
              
        }).save();
        generateServerCode(res, 200, {status : "ok"});
    
})


module.exports = BooksRouter;