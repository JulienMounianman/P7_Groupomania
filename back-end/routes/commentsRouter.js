const express = require('express');
const ctrl = require('../controllers/commentsControlleurs');
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/:id', auth, ctrl.getCommentByPost);
router.post('/:id', auth, ctrl.CreateComment);
router.put('/:id', auth, ctrl.udapteComment);
router.delete('/:id', auth, ctrl.deleteComment);

module.exports = router;