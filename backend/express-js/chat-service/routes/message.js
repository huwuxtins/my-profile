var express = require('express');
const MessageController = require('../controller/message');
var router = express.Router();

router.get('', MessageController.getMessagesByFromAndTo)
router.post('', MessageController.addMessage)
router.put('', MessageController.updateMessage)
router.delete('/:id', MessageController.deleteMessage)

module.exports = router;