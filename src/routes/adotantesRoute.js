const express = require("express");
const router = express.Router();
const controller = require('../controllers/adotantesController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.post('/login', controller.login);
router.delete('/:id', controller.deleteAdotante);

module.exports = router;