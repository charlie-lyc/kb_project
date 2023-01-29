const express = require('express')
const asyncHandler = require('express-async-handler')
const { Survey, User } = require('../models')

const router = express.Router()

/**
 * @description Create a survey
 * @method POST
 * @route /api/survey
 * @access private
 */
router.post('/', asyncHandler(async (req, res) => {
    const survey = req.body
    // console.log(survey)
    if (!survey) {
        return res.status(400).redirect('/survey')
    }
    const newSurvey = await Survey.create({
        ...survey,
        username: req.user.username,
        UserId: req.user.id
    })
    // console.log(newSurvey) // <<<<<<<<<
    if (!newSurvey) {
        return res.status(500).redirect('/survey')
    }
    const updatedUser = await User.update(
        { isJoined: true },
        { where: { id: req.user.id } }
    )
    // console.log(updatedUser) // <<<<<<<<<
    if (!updatedUser) {
        return res.status(500).redirect('/survey')
    }
    res.status(201).json({ message: 'Created', surveyId: newSurvey.id })
}))

/**
 * @description Delete a survey
 * @method DELETE
 * @route /api/survey
 * @access private
 */
router.delete('/', asyncHandler(async (req, res) => {
    const survey = await Survey.findOne({
        where: { userId: req.user.id }
    })
    // console.log(survey) // <<<<<<<<<
    if (!survey) {
        return res.status(404).redirect('/survey')
    }
    await survey.destroy()
    const updatedUser = await User.update(
        { isJoined: false },
        { where: { id: req.user.id } }
    )
    // console.log(updatedUser) // <<<<<<<<<
    if (!updatedUser) {
        return res.status(500).redirect('/survey')
    }
    res.status(200).json({ message: 'OK' })
}))


module.exports = router