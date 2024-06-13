var express = require('express');
var router = express.Router();

const FollowController = require('../controller/follow')

router.post('/', FollowController.createFollow)
router.delete('/', FollowController.deleteFollow)

module.exports = router