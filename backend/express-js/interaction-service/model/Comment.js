module.exports = class Comment {
    constructor(commentID, userID, blogID, createdAt, replyCommentID, content) {
        this.commentID = commentID
        this.userID = userID
        this.blogID = blogID
        this.createdAt = createdAt
        this.updatedAt = createdAt
        this.replyCommentID = replyCommentID
        this.content = content
    }

    toJson() {
        return {
            commentID: this.commentID,
            userID: this.userID,
            blogID: this.blogID,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            replyCommentID: this.replyCommentID,
            content: this.content,
        }
    }

    fromJson(json) {
        this.commentID = json.commentID
        this.userID = json.userID
        this.blogID = json.blogID
        this.createdAt = json.createdAt
        this.updatedAt = json.updatedAt
        this.replyCommentID = json.replyCommentID
        this.content = json.content
    }
}