const express = require('express');
const auth = require('../../shared/Passport/Auth');
const UsersControllers = require('./UsersControllers');

const UsersRouter = express.Router();

UsersRouter.post('/registration',  UsersControllers.registration);
UsersRouter.post('/login', UsersControllers.login);

UsersRouter.get('/profile', auth, UsersControllers.getProfile);
UsersRouter.get('/friends', auth, UsersControllers.getFriends);

module.exports = UsersRouter;