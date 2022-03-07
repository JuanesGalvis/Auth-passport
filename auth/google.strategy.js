const Strategy = require('passport-google-oauth').OAuth2Strategy;

const Google = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: [ 'profile' ],
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    done(null, profile);
})

module.exports = { Google };