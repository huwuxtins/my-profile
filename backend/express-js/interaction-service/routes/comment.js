var express = require('express');
var router = express.Router();

const CommentController = require('../controller/comment')

router.get('/', CommentController.getCommentsByBlog)
router.post('/', CommentController.addComment)
router.put('/:commentID', CommentController.updateComment)
router.delete('/:commentID', CommentController.deleteComment)

module.exports = router;