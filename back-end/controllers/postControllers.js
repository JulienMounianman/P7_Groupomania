const User = require('../models/User');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

exports.CreatePost = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    console.log(decodedToken);
    User.findOne({ where: { id: userId } })
        .then(user => {
            if (user) {
                Post.sync().then(() => {
                    Post.create({
                        ...req.body,
                        UserId: user.id
                    })
                        .then(newPost => res.status(201).json(newPost))
                        .catch(error => res.status(500).json(error));
                })
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