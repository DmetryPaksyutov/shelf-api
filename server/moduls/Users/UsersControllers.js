const UsersServices = require('./UsersServices');
const generateServerCode = require('../../shared/ServerRespons/ServerResponses').generateServerCode;

module.exports = {

    async registration (req, res) {
        try {
            const {login, email, password} = req.body;

            const answer = await UsersServices.registration(login, email, password);
            if (answer.t === 'user create') {
                generateServerCode(res, 201, 'ok');
            }
            if (answer.t === 'user already exists') {
                generateServerCode(res, 409, null, {}, 'пользователь с данной электронной почтой уже существует');
            }
            if (answer.t === 'error') {
                generateServerCode(res, 500, null, answer.e, 'ошибка запроса к БД');
            }
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async login (req, res) {
        try {
            const {email, pass} = req.body;
            const answer = await UsersServices.login(email, pass);
            if (answer?.t === 'error') {
                generateServerCode(res, 500, null, answer.e, 'ошибка запроса к БД');
            }
            if (answer?.t === 'login or pass are not') {
                generateServerCode(res, 412, null, {}, 'логин или пароль неверны');
            }
            if (answer?.token) {
                generateServerCode(res, 200, answer);
            }
        }
        catch (e) {
            generateServerCode(res, 500, null, e, 'что-то пошло не так');
        }
    },

    async getProfile(req, res) {
        try {
            const {id} = req.query;
            const answer = await UsersServices.getProfile(id);
            if (answer === 'error')  generateServerCode(res, 500,  null, '', 'ошибка при запросе к БД');
             else {
                generateServerCode(res, 200,  answer);
            }
        }
        catch (e) {
            generateServerCode(res, 500,  null, e, 'что-то пошло не так');
        }
    },

    async getFriends(req, res) {
        try {
            const {id} = req.query;
            const answer = await UsersServices.getFriends(id);
            if (answer === 'error')  generateServerCode(res, 500,  null, '', 'ошибка при запросе к БД');
            else {
                generateServerCode(res, 200,  answer);
            }
        }
        catch (e) {
            generateServerCode(res, 500,  null, e, 'что-то пошло не так');
        }
    }

}