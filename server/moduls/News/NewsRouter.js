const express = require('express');
const NewsControllers = require('./NewsControllers');

const NewsRouter = express.Router();

const News = require('./New.model');
const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;

NewsRouter.get('', NewsControllers.getNewsList);

NewsRouter.get('/testCreat', async (req, res) => {
         await new News({
                title : "news 1",
                image : "image_news1",
                text : "text`s news 1",
                type : 1,
              
        }).save();
        generateServerCode(res, 200, {status : "ok"});
    
})


module.exports = NewsRouter;