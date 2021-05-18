// Importación de módulos
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const usuarioRoute = require('./routes/usuarioRoute');

// Conectar a mongodb
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('Conectado a mongo DB'));

// crear el servidor
const app = express();

// Habilitar express.json
app.use(express.json({ extended: true }));
app.use(express.urlencoded());

// Configurar logs de morgan
app.use(morgan('dev'));

//importar rutas
app.use('/api/usuarios', usuarioRoute);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
});
