var express = require('express');
var router = express.Router();

const LikeController = require('../controller/like')

router.post('/', LikeController.creatLike)
router.delete('/', LikeController.deleteLike)

module.exports = router;