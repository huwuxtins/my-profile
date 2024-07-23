import 'dotenv/config'
import axios from 'axios'

const URL = process.env.URL + 'comment'

const getComments = async (blogID, page, size) => {
    const response = await axios.get(`${URL}`, {
        params: {
            blogID, page, size
        }
    })
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

const addComment = async (comment) => {
    const response = await axios.post(URL, comment)
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

const updateComment = async (comment) => {
    const response = await axios.put(URL, comment)
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

const deleteComment = async (commentID) => {
    const response = await axios.delete(`${URL}/${commentID}`)
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

export { getComments, addComment, updateComment, deleteComment }