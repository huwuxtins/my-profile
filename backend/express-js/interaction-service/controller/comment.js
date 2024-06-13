const cypher = require('../script')
const { v4: uuidv4 } = require('uuid');

const CommentController = {
    getCommentsByBlog: async (req, res, err) => {
        const blogID = req.query.blogID

        await req.neo4j.read(cypher('read-comment'), {blogID})
        .then((value) => {
            res.status(200).json({message: "Get comments successfully!", data: value.records})
        }).catch((err) => {
            res.status(500).json({message: "Get comments failed!", data: err})
        });
    },
    addComment: async (req, res, err) => {
        const {userID, blogID, createdAt, replyCommentID, content} = req.body

        const comment = {
            commentID: uuidv4(),
            userID, 
            blogID, 
            createdAt,
            replyCommentID, 
            content
        }

        console.log(comment)

        await req.neo4j.write(cypher('create-comment'), comment)
        .then(() => {
            res.status(201).json({message: "Add comment successfully!", data: comment})
        }).catch((err) => {
            res.status(500).json({message: "Add comment failed!", data: err})
        });
    },
    updateComment: async (req, res, err) => {
        const commentID  = req.params.commentID

        const {createdAt, replyCommentID, content} = req.body

        const comment = {
            commentID, 
            createdAt,
            replyCommentID, 
            content
        }

        await req.neo4j.write(cypher('update-comment'), comment)
        .then(() => {
            res.status(200).json({message: "Update comment successfully!", data: comment})
        }).catch((err) => {
            res.status(500).json({message: "Update comment failed!", data: err})
        });
    },
    deleteComment: async (req, res, err) => {
        const commentID = req.params.commentID

        await req.neo4j.write(cypher('delete-comment'), commentID)
        .then(() => {
            res.status(200).json({message: "Delete comment successfully!", data: commentID})
        }).catch((err) => {
            res.status(500).json({message: "Delete comment failed!", data: err})
        });
    }
}

module.exports = CommentController