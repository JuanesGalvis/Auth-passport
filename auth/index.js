const Passport = require('passport');

// Manejo de sesión mediante Passport
Passport.serializeUser((user, done) => {
    done(null, user)
});

Passport.deserializeUser((user, done) => {
    done(null, user)
});

// Strategies
const { GitHub } = require('./github.strategy');
const { Discord } = require('./discord.strategy');
const { Google } = require('./google.strategy');

Passport.use("github", GitHub);
Passport.use("discord", Discord);
Passport.use("google", Google);