const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

const User = mongoose.model('users');

// passport.serializeUser(function(user, done){
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done){
//     User.findById(id)
//         .then(user => {
//             done(null, user);
//         })
// });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use( 
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, requestToken, profile, done) => {
            console.log(profile);
            const existingUser = await User.findOne({ googleID: profile.id })

            if(existingUser){
                done(null, existingUser)
            } 
            else{

                const user = new User({ 
                    googleID: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value
                }).save()
                done(null, user)
            }
        }
    ) 
);