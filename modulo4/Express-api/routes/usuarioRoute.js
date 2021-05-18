// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const usuarioValidation = require('../validations/usuarioValidation');

// api/usuarios
// Crear un usuario
router.post('/', usuarioValidation.crearUsuario, usuarioController.crearUsuario);

module.exports = router;
