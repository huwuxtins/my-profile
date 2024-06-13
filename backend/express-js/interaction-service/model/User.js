module.exports = class Like {
    constructor(userID, avatar, username) {
        this.userID = userID
        this.avatar = avatar
        this.username = username
    }

    toJson() {
        return {
            userID: this.userID,
            avatar: this.avatar,
            username: this.username,
        }
    }
}