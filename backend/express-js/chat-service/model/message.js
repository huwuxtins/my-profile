const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        default: "",
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now,
    },
    from: {
        type: String,
        require: true,
    },
    to: {
        type: String,
        require: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    }
})
const Message = mongoose.model('Message', MessageSchema)
module.exports = Message