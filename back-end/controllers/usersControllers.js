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

exports.deleteProfil = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
  const userId = decodedToken.userId;
  db.User.destroy({ where: {id: userId }})
  .then(() => res.status(200).json({ message: 'utilisateur supprimé !' }))
  .catch(error => res.status(400).json({ error }));
}

exports.getUserById = (req, res) => {
  db.User.findOne({ where: { id: req.params.id } })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json(error));
}