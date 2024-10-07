var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { auth, requiresAuth } = require('express-openid-connect');

var usersRouter = require('./routes/user');
var blogRouter = require('./routes/blog');
var commentRouter = require('./routes/comment');
var likeRouter = require('./routes/like');
var followRouter = require('./routes/follow')

var dotenv = require('dotenv')
dotenv.config()

var app = express();

// config auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_AUTH0,
  baseURL: 'http://localhost:8081',
  clientID: 'Z5jxUWcnF8AJzjICmHD6fD26YvXJjnrg',
  issuerBaseURL: 'https://dev-k6vjpfkbkgmdsry6.us.auth0.com',
  authRequired: false,
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

// config neo4j
app.use((req, res, next) => {
  req.neo4j = require('./database/neo4js')
  next()
})

// config routes
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/comment', commentRouter);
app.use('/api/v1/like', likeRouter);
app.use('/api/v1/follow', followRouter);

// Config swagger
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
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
  // swaggerUi.serve,
  // swaggerUi.setup(
  //   swaggerSpec,
  // ),
  (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  }
);

require('./eureka-client');

module.exports = app;
