const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }

    let { email, password } = req.body;

    try {
        let usuarioEncontrado = await Usuario.findOne({ email });

        if (usuarioEncontrado) {
            return res.status(400).send('Email ya esta en uso');
        }

        //nuevo usuario
        let usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error al crear el Usuario');
    }
};

exports.obtenerUsuarios = (req, res) => {
    console.log('funcion obtener usuarios');
};
