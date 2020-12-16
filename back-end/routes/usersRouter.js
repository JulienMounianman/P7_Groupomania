const express = require('express');
const ctrl = require('../controllers/usersControllers');
const router = express.Router();
const password_middleware = require('../middleware/password_middleware')

router.post('/signup', password_middleware, ctrl.signup);
router.post('/login', ctrl.login);
router.get('/profile', ctrl.getProfile);
router.put('/profile/:id', ctrl.UpdateProfile);
module.exports = router;
