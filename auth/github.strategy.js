const Strategy = require('passport-github2').Strategy;

const GitHub = new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback",
    scope: ['user', 'user:email'],
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {

    console.log(profile)

    const UserObject = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
    }

    done(null, UserObject);
})

module.exports = { GitHub }