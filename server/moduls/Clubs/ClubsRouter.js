const express = require('express');
const ClubsControllers = require('./ClubsControllers');
const auth = require('../../shared/Passport/Auth')

const ClubsRouter = express.Router();

const Clubs = require('./Club.model');
const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;

ClubsRouter.get('', ClubsControllers.getClubsList);
ClubsRouter.post('/creat', auth, ClubsControllers.createClub);

ClubsRouter.get('/testCreat', async (req, res) => {
         await new Clubs({
                
              
        }).save();
        generateServerCode(res, 200, {status : "ok"});
    
})


module.exports = ClubsRouter;