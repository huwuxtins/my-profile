module.exports = class Blog {
    constructor(blogID, userID) {
        this.blogID = blogID
        this.userID = userID
    }

    toJson() {
        return {
            bloID: this.blogID,
            userID: this.userID,
        }
    }
}