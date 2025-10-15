const cypher = require('../script');
const { v4: uuidv4 } = require('uuid');

const BlogController = {
    getBlogByID: async (req, res, err) => {
        const blogID = req.params.blogID

        await req.neo4j.read(cypher('read-blog'), {blogID})
        .then((value) => {
            res.status(200).json(
                {
                    message: "Read blog successfully!", 
                    data: {
                        blogID: value.records[0].get('blog').properties, 
                        users: value.records.reduce((acc, record) => {
                            const userProperties = record.get('user')?.properties; // Use optional chaining
                            return acc.concat(userProperties || []); // Concat with empty array if userProperties is null/undefined
                        }, []),
                    }
                })
        }).catch((err) => {
            res.status(404).json({message: "Read blog failed!", data: err})
        });
    },
    addBlog: async (req, res, err) => {
        const blogID = uuidv4();

        const {createdAt, content, userID} = req.body;

        const blog = {blogID, createdAt, content, userID};

        await req.neo4j.write(cypher('create-blog'), blog)
        .then(() => {
            res.status(200).json({message: "Add blog successfully!", data: blogID})
        }).catch((err) => {
            res.status(500).json({message: "Add blog failed!", data: err})
        });  
    },
    updateBlog: async (req, res, err) => {
        const {blogID} = req.params.blogID

        const {userID, updatedAt, content} = req.body;

        const blog = {blogID, userID, updatedAt, content};

        await req.neo4j.write(cypher('update-blog'), blog)
        .then(() => {
            res.status(200).json({message: "Update blog successfully!", data: blogID})
        }).catch((err) => {
            res.status(500).json({message: "Update blog failed!", data: err})
        });
    },
    deleteBlog: async (req, res, err) => {
        const {blogID} = req.params.blogID

        await req.neo4j.write(cypher('delete-blog'), {blogID})
        .then((value) => {
            res.status(200).json({message: "Add blog successfully!", data: value})
        }).catch((err) => {
            res.status(500).json({message: "Add blog failed!", data: err})
        });  
    }
}

module.exports = BlogController