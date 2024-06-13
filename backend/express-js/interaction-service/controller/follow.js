const cypher = require('../script')

const FollowController = {
    createFollow: async (req, res, err) => {
        const follow = { followerID: req.body.followerID, targetID: req.body.targetID }

        const cypherScript = cypher('create-follow')

        await req.neo4j.write(cypherScript, follow)
        .then((value) => {
            res.status(201).json({
                message: "Create follow successfully!", 
                data: {
                    follower: value.records[0].get('follower'),
                    target: value.records[0].get('target'),
                }
            })
        }).catch((err) => {
            console.log(cypherScript)
            res.status(500).json({message: "Create follow failed!", data: err})
        });
    },
    deleteFollow: async (req, res, err) => {
        const follow = { followerID: req.query.followerID, targetID: req.query.targetID }

        const cypherScript = cypher('delete-follow')

        await req.neo4j.write(cypherScript, follow)
        .then((value) => {
            res.status(201).json({message: "Delete follow successfully!", data: value})
        }).catch((err) => {
            console.log(cypherScript)
            res.status(500).json({message: "Delete follow failed!", data: err})
        });
    }
}

module.exports = FollowController