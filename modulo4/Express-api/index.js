// Importación de módulos de versiones anteriores
const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./routes/usuarios');
// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//importar rutas
app.use('/api/usuarios', usuariosRoutes);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
});
