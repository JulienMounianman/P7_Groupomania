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
    db.Category.findAll({ order: [['name', 'ASC']] })
        .then(Category => res.status(200).json(Category))
        .catch(error => res.status(404).json(error));
}

exports.getOneCategory = (req, res) => {
    db.Category.findOne({ where: { id: req.params.id } })
        .then(category => res.status(200).json(category))
        .catch(error => res.status(404).json(error));
}

exports.udapteCategory = (req, res) => {
    db.Category.findOne({ where: { id: req.params.id } })
        .then(category => {
            category.update({
                name: req.body.name,
                description: req.body.description,
            })
                .then(() => res.status(200).json({ message: 'categorie modifié !' }))
                .catch(error => res.status(400).json({ error }));
        })
}

exports.deleteCategory = (req, res) => {
 
    db.Post.findAll({ where: { categoryId: req.params.id } })
        .then((result) => {
            result.forEach(element => {
                db.Comments.destroy({ where: { postId: element.id } })
                    .then(() => {
                        db.Post.destroy({ where: { categoryId: req.params.id } })
                            .then(() => {
                                db.Category.destroy({ where: { id: req.params.id } })
                                    .then(() => res.status(200).json({ message: 'categorie supprimé !' }))
                                    .catch(error => res.status(400).json({ error }));
                            })
                    });
            })
            if(result.length === 0) {
                db.Category.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'categorie supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
}
