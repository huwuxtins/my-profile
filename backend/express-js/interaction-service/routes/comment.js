var express = require('express');
var router = express.Router();

const CommentController = require('../controller/comment')

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comment management
 */

/**
 * @swagger
 * /api/v1/comment:
 *   get:
 *     summary: Get list comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: List of comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       404:
 *         description: Comments not found
 */

/**
 * @swagger
 * /api/v1/comment:
 *   post:
 *     summary: Add a comment blog
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: The comment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/comment/{commentID}:
 *   put:
 *     summary: Update a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: commentID
 *         schema:
 *           type: string
 *         required: true
 *         description: The comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: The Comment was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Comment not found
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/comment/{commentID}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: commentID
 *         schema:
 *           type: string
 *         required: true
 *         description: The comment ID
 *     responses:
 *       200:
 *         description: The comment was successfully deleted
 *       404:
 *         description: comment not found
 */


router.get('/', CommentController.getCommentsByBlog)
router.post('/', CommentController.addComment)
router.put('/:commentID', CommentController.updateComment)
router.delete('/:commentID', CommentController.deleteComment)

module.exports = router;