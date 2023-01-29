const express = require('express')
const asyncHandler = require('express-async-handler')
const { Post } = require('../models')

const router = express.Router()

/**
 * @description Create a post
 * @method POST
 * @route /api/post
 * @access private
 */
router.post('/', asyncHandler(async (req, res) => {
    const { title, body} = req.body
    // console.log(userId, username, title, body) // <<<<<<<<<
    if (!title || !body) {
        return res.status(400).redirect('/board')
    }
    const newPost = await Post.create({
        UserId: req.user.id,
        username: req.user.username,
        title,
        body,
    })
    // console.log(newPost) // <<<<<<<<<
    if (!newPost) {
        return res.status(500).redirect('/board')
    }
    res.status(201).json({ message: 'Created', postId: newPost.id })
}))

/**
 * @description Fetch posts
 * @method GET
 * @route /api/post
 * @access public
 */
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll(
        // { offset: 20, limit: 20 }, // Skip 5 instances and fetch the 5 after that
        { order: [ ['createdAt', 'DESC'], ] }
    )
    // console.log(posts) // <<<<<<<<<
    if (!posts) {
        return res.status(500).redirect('/about')
    }
    res.status(200).json({ message: 'OK', posts })
}))

/**
 * @description Fetch a post
 * @method GET
 * @route /api/post/:postId
 * @access public
 */
router.get('/:postId', asyncHandler(async (req, res) => {
    const { postId } = req.params
    // console.log(postId) // <<<<<<<<<
    if (!postId) {
        return res.status(400).redirect('/board')
    }
    const post = await Post.findOne({ 
        where: { id: postId } 
    })
    // console.log(post) // <<<<<<<<<
    if (!post) {
        return res.status(404).redirect('/board')
    }
    res.status(200).json({ message: 'OK', post })
}))

/**
 * @description Delete a post
 * @method DELETE
 * @route /api/post/:postId
 * @access private
 */
router.delete('/:postId', asyncHandler(async (req, res) => {
    const { postId } = req.params
    // console.log(postId) // <<<<<<<<<
    if (!postId) {
        return res.status(400).redirect('/about')
    }
    const post = await Post.findOne({
        where: { id: postId }
    })
    // console.log(post) // <<<<<<<<<
    if (!post) {
        return res.status(404).redirect('/about')
    }
    await post.destroy()
    res.status(200).json({ message: 'OK' })
}))

/**
 * @description Modify a post
 * @method PUT
 * @route /api/post/:postId
 * @access private
 */
router.put('/:postId', asyncHandler(async (req, res) => {
    const { postId } = req.params
    // console.log(postId) // <<<<<<<<<
    const { title, body } = req.body
    // console.log(title, body) // <<<<<<<<<
    if (!postId || !title || !body) {
        return res.status(400).redirect('/board')
    }
    const foundPost = await Post.findOne({
        where: { id: postId }
    })
    // console.log(foundPost) // <<<<<<<<<
    if (!foundPost) {
        return res.status(404).redirect('/board')
    }
    const updatedPost = await Post.update(
        { title, body},
        { where: { id: postId } }
    )
    // console.log(updatedPost) // <<<<<<<<<
    if (!updatedPost) {
        return res.status(500).redirect('/board')
    }
    res.status(200).json({ message: 'OK' })
}))

module.exports = router