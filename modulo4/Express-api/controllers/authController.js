const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.register = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores.array()[0]);
    }

    let { email, password } = req.body;

    try {
        let usuarioEncontrado = await Usuario.findOne({ email });

        if (usuarioEncontrado) {
            return res.status(400).send({ msg: 'Email ya esta en uso' });
        }

        //nuevo usuario
        let usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await usuario.save();

        // Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '365d', //1 hora
            },
            (error, token) => {
                if (error) throw error;
                // Enviar token al usuario.
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Hubo un error al crear el Usuario' });
    }
};

exports.login = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores.array()[0]);
    }
    const { email, password } = req.body;

    try {
        //Revisar usuario registrado
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'El Usuario no existe' });
        }
        //Revisar el password
        const passCorrect = await bcryptjs.compare(password, usuario.password);
        if (!passCorrect) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }

        // Si todo es correcto Crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id,
            },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: '365d', //1 hora
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log('~ error', error);
        res.status(400).send({ msg: 'Hubo un error en login' });
    }
};

exports.getUser = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password -__v');

        res.send(usuario);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al obtener el usuario' });
    }
};
