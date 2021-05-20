// Importación de módulos
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const usuarioRoute = require('./routes/usuarioRoute');
const authRoute = require('./routes/authRoute');

// Conectar a mongodb
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('Conectado a mongo DB'))
    .catch((err) => console.log('No se conecto a la DB', err));

// crear el servidor
const app = express();

// Habilitar express.json
app.use(express.json({ extended: true }));
app.use(express.urlencoded());

// Configurar logs de morgan
app.use(morgan('dev'));

//importar rutas
app.use('/api/usuarios', usuarioRoute);
app.use('/api/auth', authRoute);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
});
