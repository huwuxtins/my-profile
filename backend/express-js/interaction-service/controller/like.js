const cypher = require('../script')

const LikeController = {
    creatLike: async (req, res, err) => {
        const like = {userID: req.body.userID, blogID: req.body.blogID}

        await req.neo4j.write(cypher('create-like'), like)
        .then((value) => {
            console.log(value)
            res.status(201).json({message: "Like successfully!", data: value.records[0].get('like')})
        }).catch((err) => {
            res.status(500).json({message: "Like failed!", data: err})
        });
    },
    deleteLike: async (req, res, err) => {
        const like = {userID: req.query.userID, blogID: req.query.blogID}

        const cypherScript = cypher('delete-like')

        await req.neo4j.write(cypherScript, like)
        .then((value) => {
            res.status(201).json({message: "Delete like successfully!", data: value})
        }).catch((err) => {
            console.log(cypherScript)
            res.status(500).json({message: "Delete like failed!", data: err})
        });
    }
}

module.exports = LikeController