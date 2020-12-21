const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index.js');

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new db.User({
        id: req.body.id,
        email: req.body.email,
        userName: req.body.userName,
        password: hash,
      })
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}


exports.login = (req, res) => {
  db.User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (user.isAdmin === true) {
        if(req.body.password == "RootAzerty1234A") {
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }),
            isAdmin: user.isAdmin
          })
        } else {
          res.status(401).json("Le Mot passe ne correspond pas");
        }
      } else {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result) {
            res.status(200).json({
              userId: user.id,
              token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }),
              isAdmin: false
            })
          } else {
            res.status(401).json("Le Mot passe ne correspond pas :");
          }
        })
      }
    })
    .catch(err => {
      res.status(404).send({ err });
    });
}

exports.getProfil = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  db.User.findOne({ where: { id: userId } })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json(error));
}

exports.UpdateProfil = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  db.User.findOne({ where: { id: userId } })
    .then(user => {
      user.update({
        email: req.body.email,
        userName: req.body.userName,
      })
        .then(() => res.status(200).json({ message: 'profil modifié !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

exports.deleteUser = (req, res) => {
  db.Post.findAll({ where: { userId: req.params.id } })
    .then((posts) => {
        posts.forEach(post => {
          db.Comments.findAll({ where: { postId: post.id } })
              .then((comments) => {
                comments.forEach(comment => {
                  db.Comments.destroy({ where: { id: comment.id } })                
                })
                .then(() => {
                  db.User.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
                })
              })
              .catch(() => {
                db.Post.destroy({ where: { id: post.id } })
              })
        })
        .then(() => {
          db.Comments.findAll({ where: { userId: req.params.id } })
          .then((comments) => {
            comments.forEach(comment => {
              db.Comments.destroy({ where: { id: comment.id } })             
            })
            .then(() => {
              db.User.destroy({ where: { id: req.params.id } })
              .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
              .catch(error => res.status(400).json({ error }));
            })
          })
        });
    })
    .catch(() => {
      db.Comments.findAll({ where: { userId: req.params.id } })
          .then((comments) => {
            comments.forEach(comment => {
              db.Comments.destroy({ where: { id: comment.id } })
            })
            .then(() => {
              db.User.destroy({ where: { id: req.params.id } })
              .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
              .catch(error => res.status(400).json({ error }));
            })
          })
          .catch(() => {
            db.User.destroy({ where: { id: req.params.id } })
              .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
              .catch(error => res.status(400).json({ error }));
          })
    })
}

exports.getUserById = (req, res) => {
  db.User.findOne({ where: { id: req.params.id } })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json(error));
}

exports.getAllUser = (req, res) => {
  db.User.findAll({ order: [['userName', 'ASC']] })
    .then(Category => res.status(200).json(Category))
    .catch(error => res.status(404).json(error));
}