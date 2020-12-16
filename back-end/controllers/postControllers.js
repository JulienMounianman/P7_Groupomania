const User = require('../models/User');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

exports.CreatePost = (req, res) => {
    const token = req.headers['authorization'];
    const userId = "";

    jwt.verify(token, 'RANDOM_TOKEN_SECRET', function (err, decoded) {
        console.log(decoded);
        userId = decoded;
    });
    User.findOne({where: { id: userId }})
        .then(user => {
            if (user) {
                Post.create({
                    ...req.body,
                    UserId: user.id
                })
                    .then(newPost => res.status(201).json(newPost))
                    .catch(error => res.status(500).json(error));
            }
        })
        .catch(error => res.status(404).json(error));
}

exports.getAllPost = (req, res) => {
    Post.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(404).json(error));
}

exports.getOnePost = (req, res) => {
}

exports.udaptePost = (req, res) => {
}

exports.deletePost = (req, res) => {
}

exports.udapteLikePost = (req, res) => {

}