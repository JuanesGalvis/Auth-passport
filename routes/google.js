// Crear Router
const Express = require('express');
const GoogleRouter = Express.Router();

const Passport = require('passport');

GoogleRouter.get('/auth/google',
    Passport.authenticate('google', {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
        session: false
    }));

GoogleRouter.get('/auth/google/callback', Passport.authenticate('google'), (req, res) => {
    // res.json({user: req.user, message: 'LOGIN COMPLETADO CON GOOGLE' });
    res.redirect(`${process.env.CLIENT_URL}/profile`);
})

GoogleRouter.get('/google-user', (req, res) => {
    res.json({ data: req.user });
})

module.exports = GoogleRouter;