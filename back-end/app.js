const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRouter');
const postsRoutes = require('./routes/postsRouter');
const categoriesRoutes = require('./routes/categoriesRouter');

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
app.use('/api/category/', categoriesRoutes);

module.exports = app;