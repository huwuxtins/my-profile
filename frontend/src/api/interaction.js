import axios from "axios";

const URL_FOLLOW = process.env.NEXT_PUBLIC_URL + 'follow'
const URL_LIKE = process.env.NEXT_PUBLIC_URL + 'like'

const addFollow = async (followerID, targetID) => {
    const response = await axios.post(URL_FOLLOW, { followerID, targetID })
        .then(value)
        .catch(err => {
            console.error(err)
        })

    if (response.status == 201) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const unFollow = async (followerID, targetID) => {
    const response = await axios.delete(URL_FOLLOW, { params: { followerID, targetID } })
        .then(value)
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const addFriend = async (userID, friendID) => {
    const response = await axios.post(URL_FOLLOW, { userID, friendID })
        .then(value)
        .catch(err => {
            console.error(err)
        })

    if (response.status == 201) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const unFriend = async (userID, friendID) => {
    const response = await axios.delete(URL_FOLLOW, { params: { userID, friendID } })
        .then(value)
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

export { addFollow, unFollow, addFriend, unFriend }