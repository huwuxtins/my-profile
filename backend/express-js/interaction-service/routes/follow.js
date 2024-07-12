var express = require('express');
var router = express.Router();

const FollowController = require('../controller/follow')

/**
 * @swagger
 * tags:
 *   name: Follow
 *   description: follow management
 */

/**
 * @swagger
 * /api/v1/follow/:
 *   post:
 *     summary: Update a follow by ID
 *     tags: [Follow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/follow'
 *     responses:
 *       200:
 *         description: The follow was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/follow'
 *       404:
 *         description: follow not found
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/follow/:
 *   delete:
 *     summary: Delete a follow by ID
 *     tags: [Follow]
 *     parameters:
 *       - in: query
 *         name: followerID
 *         schema:
 *           type: string
 *         required: true
 *         description: The follower ID
 *       - in: query
 *         name: targetID
 *         schema:
 *           type: string
 *         required: true
 *         description: The target ID
 *     responses:
 *       200:
 *         description: The follow was successfully deleted
 *       404:
 *         description: follow not found
 */

router.post('/', FollowController.createFollow)
router.delete('/', FollowController.deleteFollow)

module.exports = router