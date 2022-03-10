// Crear Router
const Express = require('express');
const TwitchRouter = Express.Router();

const Passport = require('passport');

TwitchRouter.get('/auth/twitch', Passport.authenticate('twitch'));

TwitchRouter.get('/auth/twitch/callback', Passport.authenticate('twitch', {
    successRedirect: `${process.env.CLIENT_URL}/profile`,
    failureRedirect: '/auth/failed'
}));

module.exports = TwitchRouter;