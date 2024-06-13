module.exports = class Comment {
    constructor(commentID, userID, blogID, createdAt, replyCommentID, content) {
        this.commentID = commentID
        this.userID = userID
        this.blogID = blogID
        this.createdAt = createdAt
        this.replyCommentID = replyCommentID
        this.content = content
    }

    toJson() {
        return {
            commentID: this.commentID,
            userID: this.userID,
            blogID: this.blogID,
            createdAt: this.createdAt,
            replyCommentID: this.replyCommentID,
            content: this.content,
        }
    }
}