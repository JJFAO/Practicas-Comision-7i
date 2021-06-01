const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
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
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Hubo un error al crear el Usuario'});
    }
};

exports.obtenerUsuarios = (req, res) => {
    console.log('funcion obtener usuarios');
};

exports.updateUser = async (req, res) => {
    try {
        const { usuario, body } = req;
        const updatedUser = await Usuario.findByIdAndUpdate(usuario.id, body, { new: true });
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al actualizar el Usuario'});
    }
};
