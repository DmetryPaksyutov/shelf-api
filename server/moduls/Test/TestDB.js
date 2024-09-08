const express = require('express');
const UserModel = require('../Users/User.model');
//const UserServices = require('../Users/UsersServices');

const TestRouter = express.Router();

TestRouter.get('/creat', async (req, res) => {
   

    
})

TestRouter.get('/test', (req, res) => {
    res.send('working server');
})

module.exports = TestRouter;