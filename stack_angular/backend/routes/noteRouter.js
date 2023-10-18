const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notesController')

router.post('/', noteController.crearNota);
router.get('/', noteController.obtenerNotas);
router.get('/:id', noteController.obtenerNota);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
