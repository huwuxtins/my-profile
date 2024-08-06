import 'dotenv/config'
import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL + 'blog'

const getBlogByID = async (blogID) => {
    const response = await axios.get(`${URL}/${blogID}`)
        .then(value => {
            console.log(value)
        })
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const getBlogs = async (page, size) => {
    const response = await axios.get(URL, {
        params: { page, size }
    })
        .then(value => {
            console.log(value)
        })
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const addBlog = async (blog) => {
    console.log(process.env)
    const response = await axios.post(URL, blog)
        .then(value => {
            console.log(value)
        })
        .catch(err => {
            console.error(err)
        })

    if (response.status == 201) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const updateBlog = async (blog) => {

    const response = await axios.put(URL, blog)
        .then(value => {
            console.log(value)
        })
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

const deleteBlog = async (blogID) => {

    const response = await axios.delete(`${URL}/${blogID}`)
        .then(value => {
            console.log(value)
        })
        .catch(err => {
            console.error(err)
        })

    if (response.status == 200) {
        return response.data.data
    } else {
        throw new Error(response.status)
    }
}

export { getBlogByID, getBlogs, addBlog, updateBlog, deleteBlog }