const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      User.sync().then(() => {
        User.create({
          id: req.body.id,
          email: req.body.email,
          userName: req.body.userName,
          password: hash,
        })
          .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
          .catch(error => res.status(500).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
}


exports.login = (req, res) => {
  User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
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
}

exports.UpdateProfile = (req, res) => {
}