const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRouter');
const postsRoutes = require('./routes/postsRouter');
const categoriesRoutes = require('./routes/categoriesRouter');
const commentsRoutes = require('./routes/commentsRouter');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require('xss-clean');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(xss())

app.use('/api/auth/', usersRoutes);
app.use('/api/post/', postsRoutes);
app.use('/api/category/', categoriesRoutes);
app.use('/api/comment/', commentsRoutes);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 
  });
app.use(limiter);

module.exports = app;