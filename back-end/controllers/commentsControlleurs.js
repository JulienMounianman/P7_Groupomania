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
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    console.log(userId);
    db.Comments.findOne({ where: {id: req.params.id }})
    .then(comment => {
        if(comment.userId === userId){
            comment.update({
                id: comment.id,
                content: req.body.content,
                userId: comment.userId,
                postId: comment.postId
            })
            .then(() => res.status(200).json({ message: 'commentaires modifié !' }))
            .catch(error => res.status(400).json({ error }));
        }
    })
}


exports.deleteComment = (req, res) => {
    db.Comments.destroy({ where: {id: req.params.id }})
    .then(() => res.status(200).json({ message: 'commentaire supprimé !' }))
    .catch(error => res.status(400).json({ error }));
}

exports.getCommentByPost = (req, res) => {
    db.Comments.findAll({
        where: { 
            postId: req.params.id 
        },
        order: [
            ['updatedAt', 'DESC']
        ]
    })
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(404).json(error));
}

exports.getCommentById = (req, res) => {
    db.Comments.findOne({where: { id: req.params.id }})
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(404).json(error));
}