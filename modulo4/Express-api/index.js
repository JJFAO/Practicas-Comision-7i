// Importación de módulos
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const usuarioRoute = require('./routes/usuarioRoute');
const authRoute = require('./routes/authRoute');
const memeRoute = require('./routes/memeRoute');

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

app.use(cors());

// Habilitar express.json
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded());
// Habilitar

// Configurar logs de morgan
app.use(morgan('dev'));

//importar rutas
app.use('/api/usuarios', usuarioRoute);
app.use('/api/auth', authRoute);
app.use('/api/memes', memeRoute);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
});
