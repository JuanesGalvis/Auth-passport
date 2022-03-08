const Strategy = require('passport-discord').Strategy;

const Discord = new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: `http://localhost:3000/auth/discord/callback`,
    scope: ['identify', 'email', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    
    const PhotoURL = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`;

    const UserObject = {
        id: profile.id,
        name: profile.username,
        email: profile.email,
        photo:  PhotoURL,
    }

    done(null, UserObject);
})

module.exports = { Discord };