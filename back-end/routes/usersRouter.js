const express = require('express');
const ctrl = require('../controllers/usersControllers');
const router = express.Router();
const password_middleware = require('../middleware/password_middleware')

router.post('/signup', password_middleware, ctrl.signup);
router.post('/login', ctrl.login);
router.get('/profil', ctrl.getProfil);
router.put('/profil', ctrl.UpdateProfil);
module.exports = router;
