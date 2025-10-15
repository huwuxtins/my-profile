const cypher = require('../script')

const UserController = {
    getUserByID: async (req, res, err) => {
        const userID = req.params.userID

        const cypherScript = cypher('read-user')

        await req.neo4j.write(cypherScript, {userID})
        .then((value) => {
            res.status(200).json({
                message: "Get user successfully!", 
                data: {
                    user: value.records[0].get('user').properties,
                    followers: value.records.reduce((acc, record) => {
                        const userProperties = record.get('followers')?.properties; // Use optional chaining
                        return acc.concat(userProperties || []); // Concat with empty array if userProperties is null/undefined
                    }, []),
                }
            })
        }).catch((err) => {
            console.log(cypherScript)
            res.status(400).json({message: "Get user failed!", data: err})
        });
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
        const {userID} = req.params.userID
        const {avatar, username} = req.body

        const user = {userID, avatar, username}

        await req.neo4j.write(cypher('update-user'), user)
        .then(() => {
            res.status(200).json({message: "Update user successfully!", data: userID})
        }).catch((err) => {
            res.status(500).json({message: "Update user failed!", data: err})
        })
    },
    deleteUser: async (req, res, err) => {

    }
}

module.exports = UserController