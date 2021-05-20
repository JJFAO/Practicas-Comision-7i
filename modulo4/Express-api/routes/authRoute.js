const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const usuarioValidation = require('../validations/usuarioValidation');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', usuarioValidation.crearUsuario, authController.register);
router.post(
    '/login',
    [
        check('email', 'Agrega un Email Valido').isEmail(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
    ],
    authController.login
);
router.get('/', authMiddleware, authController.getUser);

module.exports = router;
