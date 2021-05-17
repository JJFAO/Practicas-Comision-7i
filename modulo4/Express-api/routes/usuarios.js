// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const usuarioValidations = require('../validations/usuarios');

// Crear un usuario
// api/usuarios
router.post('/', usuarioValidations.crearUsuario, usuarioController.crearUsuario);

module.exports = router;
