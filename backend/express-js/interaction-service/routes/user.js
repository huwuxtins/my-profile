var express = require('express');
var router = express.Router();

const UserController = require('../controller/user')

router.get('/:userID', UserController.getUserByID)
router.post('/', UserController.addUser);

module.exports = router;
