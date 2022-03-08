// Crear Router
const Express = require('express');
const GitHubRouter = Express.Router();

const Passport = require('passport');

GitHubRouter.get('/auth/github', Passport.authenticate('github'));

GitHubRouter.get('/auth/github/callback', Passport.authenticate('github', {
    successRedirect: `${process.env.CLIENT_URL}/profile`,
    failureRedirect: '/auth/failed'
}))

module.exports = GitHubRouter;