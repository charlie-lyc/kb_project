const express = require('express')
const passport = require('passport')
const asyncHandler = require('express-async-handler')
const { ensureGuest, ensureAuth } = require('../middleware/authenticator')

const router = express.Router()

/**
 * @description Authentication with Kakao
 * @method GET
 * @route /api/auth/kakao
 * @access public
 */
router.get('/kakao', 
    ensureGuest, 
    passport.authenticate('kakao', { failureRedirect: '/login' })
)

/**
 * @description allback from Kakao
 * @method GET
 * @route /api/auth/kakao/callback
 * @access public
 */
router.get('/kakao/callback', 
    ensureGuest, 
    passport.authenticate('kakao', { failureRedirect: '/login' }),
    asyncHandler(async (req, res) => {
        // Check authentication
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user.id) // <<<<<<<<<
        // console.log(req.user.isJoined) // <<<<<<<<<
        // console.log(req.user.username) // <<<<<<<<<

        // Set cookie and redirect
        res.status(200)
            .cookie('isLogged', true)
            .cookie('isJoined', req.user.isJoined)
            .cookie('username', req.user.username)
            .redirect('/survey')
    })
)

/**
 * @description Authentication with Google
 * @method GET
 * @route /api/auth/google
 * @access public
 */
router.get('/google', 
    ensureGuest, 
    passport.authenticate('google', { scope: ['profile'] })
)

/**
 * @description Callback from Google
 * @method GET
 * @route /api/auth/google/callback
 * @access public
 */
router.get('/google/callback', 
    ensureGuest, 
    passport.authenticate('google', { failureRedirect: '/login' }),
    asyncHandler(async (req, res) => {
        // Check in authentication
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user.id) // <<<<<<<<<
        // console.log(req.user.isJoined) // <<<<<<<<<
        // console.log(req.user.username) // <<<<<<<<<

        // Set cookie and redirect
        res.status(200)
            .cookie('isLogged', true)
            .cookie('isJoined', req.user.isJoined)
            .cookie('username', req.user.username)
            .redirect('/survey')
    })
)

/**
 * @description Log out
 * @method GET
 * @route /api/auth/logout
 * @access private
 */
router.get('/logout',
    ensureAuth, // >>>>>> !!! <<<<<<
    asyncHandler(async (req, res) => {
        // Session destroy
        req.session.destroy()

        // Empty req.user
        req.user = null
        
        // Clear cookie
        res.clearCookie('user')

        // Check logout
        // console.log(req.session) // <<<<<<<<<
        // console.log(req.user) // <<<<<<<<<
        // console.log(res.cookies) // <<<<<<<<<

        // Redirect
        res.redirect('/')
    })
)

module.exports = router