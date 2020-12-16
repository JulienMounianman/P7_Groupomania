const express = require('express');
const ctrl = require('../controllers/postControllers');
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/', auth, ctrl.getAllPost);
router.get('/:id', auth, ctrl.getOnePost);
router.post('/', auth, ctrl.CreatePost);
router.put('/:id', auth, ctrl.udaptePost);
router.delete('/:id', auth, ctrl.deletePost);
router.post('/:id/like', auth, ctrl.udapteLikePost);
module.exports = router