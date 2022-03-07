const Strategy = require('passport-discord').Strategy;

const Discord = new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: `http://localhost:3000/auth/discord/callback`,
    scope: ['identify', 'email', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
})

module.exports = { Discord };