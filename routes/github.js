// Crear Router
const Express = require('express');
const GitHubRouter = Express.Router();

const Passport = require('passport');

GitHubRouter.get('/auth/github', Passport.authenticate('github'));

GitHubRouter.get('/auth/github/callback', Passport.authenticate('github'), (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/profile`);
})

GitHubRouter.get('/github-user', (req, res) => {
    res.json({ data: req.user });
})

module.exports = GitHubRouter;