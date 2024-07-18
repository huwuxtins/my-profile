var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/user');
var blogRouter = require('./routes/blog');
var commentRouter = require('./routes/comment');
var likeRouter = require('./routes/like');
var followRouter = require('./routes/follow')

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
app.use('/api/v1/like', likeRouter);
app.use('/api/v1/follow', followRouter);

require('./eureka-client');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.1.0',
    info: {
      swagger: "2.0",
      title: "Interaction service",
      version: "v1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "Interaction service licence",
        url: "www.google.com/licence",
      },
      contact: {
        name: "Nguyen Huu Tin",
        email: "nguyenhuutin124@gmail.com",
      },
    },
  },
  servers: [
    {
      url: "http://localhost:8085",
    },
  ],
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);

app.use('/api/v1/interaction-swagger/v3/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerSpec,
  ),
);

module.exports = app;
