const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController')

router.post('/', userController.crearUsers);
router.get('/', userController.obtenerUsers);
router.get('/:id', userController.obtenerUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
