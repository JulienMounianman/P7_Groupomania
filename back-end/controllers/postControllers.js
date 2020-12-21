const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.CreatePost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const newPost = new db.Post({
        title: req.body.title,
        content: req.body.content,
        userId: userId,
        categoryId: parseInt(req.body.categoryId)
    })
    newPost.save()
        .then(newPost => res.status(201).json(newPost))
        .catch(error => res.status(500).json(error));
}

exports.getAllPost = (req, res) => {
    db.Post.findAll()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(404).json(error));
}

exports.getOnePost = (req, res) => {
    db.Post.findOne({ where: { id: req.params.id } })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json(error));
}

exports.udaptePost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    db.Post.findOne({ where: { id: req.params.id } })
        .then(post => {
            post.update({
                title: req.body.title,
                content: req.body.content,
                userId: userId,
                categoryId: req.body.categoryId
            })
                .then(() => res.status(200).json({ message: 'post modifié !' }))
                .catch(error => res.status(400).json({ error }));
        })
}

exports.deletePost = (req, res) => {
    db.Comments.destroy({where: { postId: req.params.id}})
    .then(() => {
        db.Post.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'post supprimé !' }))
        .catch(error => res.status(400).json({ error }));
    })      
    .catch(error => res.status(404).json(error));
}


exports.getPostByCategoryId = (req, res) => {
    db.Post.findAll({ where: { categoryId: req.params.id }, order: [['updatedAt', 'DESC']]})
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json(error));

}