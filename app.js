var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const applyPassportStrategy = require('./server/shared/Passport/PassportStrategy');

const TestRouter = require('./server/moduls/Test/TestDB');
const UsersRouter = require('./server/moduls/Users/UsersRouter');
const StaticsRouter = require('./server/moduls/Statics/StaticsRouter');
const BooksRouter = require('./server/moduls/Books/BooksRouter');
const NewsRouter = require('./server/moduls/News/NewsRouter');
const ClubsRoter = require('./server/moduls/Clubs/ClubsRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

applyPassportStrategy(passport);

app.use('/api/test', TestRouter);
app.use('/api/users', UsersRouter);
app.use('/api/statics', StaticsRouter);
app.use('/api/books', BooksRouter);
app.use('/api/news', NewsRouter);
app.use('/api/cluds', ClubsRoter);

app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
