const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const usersRoutes = require('./routes/usersRouter');
const postsRoutes = require('./routes/postsRouter');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/auth/', usersRoutes);
app.use('/api/post/', postsRoutes);

module.exports = app;