const cypher = require('../script')

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
        const {blogID, userID} = req.body
        await req.neo4j.write(cypher('create-blog'), {blogID, userID})
        .then(() => {
            res.status(200).json({message: "Add blog successfully!", data: blogID})
        }).catch((err) => {
            res.status(500).json({message: "Add blog failed!", data: err})
        });  
    },
    updateBlog: async (req, res, err) => {

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