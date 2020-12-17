const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.CreateComment = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    db.User.findOne({ where: { id: userId } })
        .then(user => {
            if (user) {
                db.Post.findOne({where: { id: req.params.id }})
                    .then(post => {                  
                        const newComment = new db.Comments({
                            content: req.body.content,
                            userId: user.id,
                            postId: post.id
                        })
                        newComment.save()
                        .then(newComment => res.status(201).json(newComment))
                        .catch(error => res.status(500).json(error));
                    })
                    .catch(error => res.status(404).json(error));            
            }
        })
        .catch(error => res.status(404).json(error));
}

exports.udapteComment = (req, res) => {
}

exports.deleteComment = (req, res) => {
}

exports.getCommentByPost = (req, res) => {
}