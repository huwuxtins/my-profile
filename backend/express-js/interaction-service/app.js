var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/user');
var blogRouter = require('./routes/blog');
var commentRouter = require('./routes/comment')

const { auth } = require('express-openid-connect');
var dotenv = require('dotenv') /// thêm dot env vào hệ thống
dotenv.config() /// load file .env

var app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_AUTH0,
  baseURL: 'http://localhost:8081',
  clientID: 'Z5jxUWcnF8AJzjICmHD6fD26YvXJjnrg',
  issuerBaseURL: 'https://dev-k6vjpfkbkgmdsry6.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.neo4j = require('./database/neo4js')
  next()
})

app.use('/api/v1/user', usersRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/comment', commentRouter);

module.exports = app;
