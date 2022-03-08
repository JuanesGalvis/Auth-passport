// Crear Router
const Express = require('express');
const DiscordRouter = Express.Router();
const Passport = require('passport');

DiscordRouter.get('/auth/discord', Passport.authenticate('discord'));

DiscordRouter.get('/auth/discord/callback', Passport.authenticate('discord', {
    successRedirect: `${process.env.CLIENT_URL}/profile`,
    failureRedirect: '/auth/failed'
}))

module.exports = DiscordRouter;