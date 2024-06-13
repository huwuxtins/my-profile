const cypher = require('../script')

const UserController = {
    getUserByID: async (req, res, err) => {

    },
    addUser: async (req, res, err) => {
        const {userID, avatar, username} = req.body

        const user = {userID, avatar, username}

        await req.neo4j.write(cypher('create-user'), user)
        .then(() => {
            res.status(200).json({message: "Add user successfully!", data: user})
        }).catch((err) => {
            res.status(500).json({message: "Add user failed!", data: err})
        });  
    },
    updateUser: async (req, res, err) => {

    },
    deleteUser: async (req, res, err) => {

    }
}

module.exports = UserController