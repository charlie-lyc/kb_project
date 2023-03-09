const express = require('express')
const passport = require('passport')
const asyncHandler = require('express-async-handler')

const router = express.Router()

/**
 * @description Authentication with Kakao
 * @method GET
 * @route /api/auth/kakao
 * @access public
 */
router.get('/kakao', passport.authenticate('kakao', { failureRedirect: '/login' }))

/**
 * @description allback from Kakao
 * @method GET
 * @route /api/auth/kakao/callback
 * @access public
 */
router.get('/kakao/callback', passport.authenticate('kakao', { failureRedirect: '/login' }),
    asyncHandler(async (req, res) => {
        // Check authentication
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user.isJoined) // <<<<<<<<<
        // console.log(req.user.id) // <<<<<<<<<
        // console.log(req.user.username) // <<<<<<<<<

        // Set status and redirect
        // res.status(200).redirect('/survey')
        res.status(200).redirect('/board')
    })
)

/**
 * @description Authentication with Google
 * @method GET
 * @route /api/auth/google
 * @access public
 */
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

/**
 * @description Callback from Google
 * @method GET
 * @route /api/auth/google/callback
 * @access public
 */
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    asyncHandler(async (req, res) => {
        // Check authentication
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user.isJoined) // <<<<<<<<<
        // console.log(req.user.id) // <<<<<<<<<
        // console.log(req.user.username) // <<<<<<<<<

        // Set status and redirect
        // res.status(200).redirect('/survey')
        res.status(200).redirect('/board')
    })
)

/**
 * @description Fetch auth info
 * @method GET
 * @route /api/auth/info
 * @access private
 */
router.get('/info',
    asyncHandler(async (req, res) => {
        res.status(200).json({
            message: 'OK',
            auth: {
                isJoined: req.user.isJoined,
                userId: req.user.id,
                username: req.user.username
            }
        })
        
    })
)

/**
 * @description Log out
 * @method GET
 * @route /api/auth/logout
 * @access private
 */
router.get('/logout',
    asyncHandler(async (req, res) => {
        // Session destroy
        req.session.destroy()

        // Empty req.user
        req.user = null
        
        // Check logout
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user) // <<<<<<<<<

        // Redirect
        res.status(200).json({ message: 'OK' })
    })
)

module.exports = router