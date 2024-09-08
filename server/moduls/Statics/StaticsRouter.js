const express = require('express');
const StaticsControllers = require('./StaticsControllers');

const StaticsRouter = express.Router();

StaticsRouter.get('/audioProposal/:fileName', StaticsControllers.getAudioProposal);
StaticsRouter.get('/audioWord/:fileName', StaticsControllers.getAudioWords);
StaticsRouter.get('/imageUser/:fileName', StaticsControllers.getImageUser);
StaticsRouter.get('/html/:fileName', StaticsControllers.getHtml);

module.exports = StaticsRouter;