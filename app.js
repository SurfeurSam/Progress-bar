require('dotenv').config();
require('@babel/register');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

const express = require('express');


const dbCheck = require('./src/middlewares/dbCheck');
const isAuth = require('./src/middlewares/isAuth');


const app = express();
const PORT = process.env.PORT || 3001;

const mainRouter = require('./src/routes/mainRouter');
const regRouter = require('./src/routes/regRouter');
const logRouter = require('./src/routes/logRouter');
const logOutRouter = require('./src/routes/logOutRouter');
const usersRouter = require('./src/routes/usersRouter');
const allListsRouter = require('./src/routes/allListsRouter');
const myListRouter = require('./src/routes/myListsRouter');
// const shablonRouter = require('./src/routes/shablon.router')
const editShablonRouter = require('./src/routes/edit.shablon.router')


const sessionConfig = {
  name: 'Cookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use('/login', (req, res, next) => {
  // console.log('session=>', req.session);
  next();
});

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(dbCheck);

app.use('/', mainRouter);
app.use('/profile', editShablonRouter);
app.use('/registration', regRouter);
app.use('/login', logRouter);
app.use('/logout', logOutRouter);
app.use('/alllists', allListsRouter);
app.use('/mylists', myListRouter);
app.use('/users', usersRouter);
// app.use('/', shablonRouter);

// app.use('*', mainRouter);

app.listen(PORT, () => {
  console.log('Server started');
});
