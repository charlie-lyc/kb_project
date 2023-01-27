const express = require('express')
const { ensureGuest, ensureAuth } = require('../middleware/authenticator')
const router = express.Router()


/**
 * @description Authentication for survey
 * @method GET
 * @route /api/survey
 * @access private
 */


module.exports = router