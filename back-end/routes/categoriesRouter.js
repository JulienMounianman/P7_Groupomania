const express = require('express');
const ctrl = require('../controllers/categoriesControlleurs');
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/', auth, ctrl.getAllCategory);
router.get('/:id', auth, ctrl.getOneCategory);
router.post('/:id', auth, ctrl.CreateCategory);
router.put('/:id', auth, ctrl.udapteCategory);
router.delete('/:id', auth, ctrl.deleteCategory);

module.exports = router;