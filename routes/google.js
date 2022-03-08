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

GoogleRouter.get('/auth/google/callback', Passport.authenticate('google', {
    successRedirect: `${process.env.CLIENT_URL}/profile`,
    failureRedirect: '/auth/failed'
}))

module.exports = GoogleRouter;