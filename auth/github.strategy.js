const Strategy = require('passport-github').Strategy;

const GitHub = new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
})

module.exports = { GitHub }