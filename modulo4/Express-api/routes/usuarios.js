// Rutas para crear usuarios
const express = require('express');
const usuarioController = require('../controllers/usuarioControllers')
const router = express.Router();

// Crear un usuario
// api/usuarios
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);

module.exports = router;
