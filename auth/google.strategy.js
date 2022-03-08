const Strategy = require('passport-google-oauth20').Strategy;

const Google = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    scope: [ 'profile' ],
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    
    const UserObject = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
    }

    done(null, UserObject);
})

module.exports = { Google };