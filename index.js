// Crear servidor 🏁
const Express = require('express');
const App = Express();

// CORS para solicitudes de otros origines
const CORS = require('cors');
App.use(CORS());

// Variables de entorno
require('dotenv').config();

// Permitir JSON en el cuerpo de las peticiones
App.use(Express.json());

// Routers
App.use(require('./routes/google'));
App.use(require('./routes/github'));
App.use(require('./routes/discord'));

// Puerto del servidor
App.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto: " + process.env.PORT || 3000)
})