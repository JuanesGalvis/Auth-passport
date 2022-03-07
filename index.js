// Crear servidor 🏁
const Express = require('express');
const App = Express();
const session = require('express-session');

// CORS para solicitudes de otros origines
const CORS = require('cors');
App.use(CORS());

App.get('/', (req, res) => {
    res.json({message: "BIENVENIDO A auth-express-passport"})
})

// Variables de entorno
require('dotenv').config();

// Manejo de sessiones de Express
const optionSECURE = process.env.ENV === 'production' ? true : false;
App.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    // No renovar cuando la sesión caduque
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: optionSECURE,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

// Passport
const Passport = require('passport');
App.use (Passport.initialize())
App.use(Passport.session());
require('./auth');

// Permitir JSON en el cuerpo de las peticiones
App.use(Express.json());

// Routers
App.use(require('./routes/google')); // ✅
App.use(require('./routes/github')); // ✅
App.use(require('./routes/discord')); // ✅

App.get('/logout', (req, res) => {
    req.logOut();
    res.json({ message: "LOGOUT SUCCESFULL" })
})


// Puerto del servidor
App.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto: " + process.env.PORT || 3000)
})