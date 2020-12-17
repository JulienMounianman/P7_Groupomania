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
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
          })
        } else {
          res.status(401).json(err);
        }
      })
    })
    .catch(err => {
      res.status(500).send({ err });
    });
}

exports.getProfile = (req, res) => {
  db.User.findOne({ where: { id: req.params.id } })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json(error));
}

exports.UpdateProfile = (req, res) => {
  db.Comments.findOne({ where: { id: req.params.id } })
    .then(user => {
      bcrypt.hash(req.body.password, 10)
        .then(hash => {
          user.update({
            id: user.id,
            email: req.body.email,
            userName: req.body.userName,
            password: hash,
          })
            .then(() => res.status(200).json({ message: 'profile modifié !' }))
            .catch(error => res.status(400).json({ error }));
        })
    })
    .catch(error => res.status(500).json({ error }));
}

exports.deleteProfile = (req, res) => {
  db.User.destroy({ where: {id: req.params.id }})
  .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
  .catch(error => res.status(400).json({ error }));
}
