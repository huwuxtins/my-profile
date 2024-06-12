const Message = require("../model/message");

const MessageController = {
    getMessagesByFromAndTo: async (req, res, err) => {
        const {from, to} = req.query
        console.log(`From: ${from}- To: ${to}`)
        try {
            await Message.find({from, to})
            .then(value => {
                console.log(value)
                res.status(200).json({message: "Get message successfully!", data: value})
            })
            .catch(error => {
                console.error(error)
            })
        } catch (error) {
            console.log(err)
            res.status(500).json({ message: "There are some errors in get message" })
        }
    },
    addMessage: async (req, res, err) => {
        const message = req.body
        console.log(message)
        try {
            await Message.create(message)
            .then(value => {
                console.log(`Value: ${value}`)
                res.status(200).json({message: "Add message successfully!", data: value})
            })
        } catch (error) {
            console.log(err)
            res.status(500).json({ message: "There are some errors in add message" })
        }
    },
    updateMessage: async (req, res, err) => {
        const message = req.body
        console.log(message)
        try {
            await Message.updateOne({_id: message._id}, message)
            .then(value => {
                res.status(200).json({message: "Update message successfully!", data: message})
            })
        } catch (error) {
            console.log(err)
            res.status(500).json({ message: "There are some errors in update message" })
        }
    },
    deleteMessage: async (req, res, err) => {
        const id = req.params['id']
        console.log(`ID: ${id}`)
        try {
            await Message.deleteOne({_id: id})
            .then(value => {
                console.log(`Value: ${value}`)
                res.status(200).json({message: "Delete message successfully!", data: value})
            })
        } catch (error) {
            console.log(err)
            res.status(500).json({ message: "There are some errors in delete message" })
        }
    }
}

module.exports = MessageController