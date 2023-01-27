const asyncHandler = require('express-async-handler')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { User } = require('../models')


module.exports = asyncHandler(async (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, cb) => {
            // console.log(profile) // <<<<<<<<<
            try {
                const user = await User.findOne({
                    where: { googleId: profile.id }
                })
                // console.log(user) // <<<<<<<<<
                if (user) {
                    return cb(null, user)
                }
                const newUser = await User.create({ 
                    googleId: profile.id,
                    username: profile.displayName,
                    provider: 'google',
                })
                // console.log(newUser) // <<<<<<<<<
                cb(null, newUser)
            } catch (error) {
                cb(error)
            }
        }
    ))

    // For session
    passport.serializeUser((user, done) => done(null, user.id))
    
    // For req.user
    passport.deserializeUser(async (id, done) => {
        try {
            const foundUser = await User.findByPk(id)
            if (foundUser) {
                return done(null, foundUser)
            }
        } catch (error) {
            done(err)
        }
    })
})
