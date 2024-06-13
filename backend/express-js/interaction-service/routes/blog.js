var express = require('express');
var router = express.Router();

const BlogController = require('../controller/blog')

router.get('/:blogID', BlogController.getBlogByID)
router.post('/', BlogController.addBlog)
router.put('/:blogID', BlogController.updateBlog)
router.put('/:blogID', BlogController.deleteBlog)

module.exports = router;