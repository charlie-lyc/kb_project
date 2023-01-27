const asyncHandler = require('express-async-handler')
const KakaoStrategy = require('passport-kakao').Strategy
const { User } = require('../models')


module.exports = asyncHandler(async (passport) => {
    passport.use(
        new KakaoStrategy({
            clientID: process.env.KAKAO_OAUTH_CLIENT_ID,
            clientSecret: process.env.KAKAO_OAUTH_CLIENT_SECRET,
            callbackURL: "/api/auth/kakao/callback"
        },
        async (accessToken, refreshToken, profile, cb) => {
            // console.log(profile) // <<<<<<<<<
            try {
                const user = await User.findOne({
                    where: { kakaoId: profile.id }
                })
                // console.log(user) // <<<<<<<<<
                if (user) {
                    return cb(null, user)
                }
                const newUser = await User.create({ 
                    kakaoId: profile.id,
                    username: profile.displayName,
                    provider: 'kakao',
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