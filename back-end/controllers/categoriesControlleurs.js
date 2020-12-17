const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.CreateCategory = (req, res) => {
    const newCategory = new db.Category({
        name: req.body.name,
        description: req.body.description,
    })
    newCategory.save()
        .then(newCategory => res.status(201).json(newCategory))
        .catch(error => res.status(500).json(error));
}

exports.getAllCategory = (req, res) => {
    db.Category.findAll()
        .then(Category => res.status(200).json(Category))
        .catch(error => res.status(404).json(error));
}

exports.getOneCategory = (req, res) => {
}

exports.udapteCategory = (req, res) => {
}

exports.deleteCategory = (req, res) => {
}
