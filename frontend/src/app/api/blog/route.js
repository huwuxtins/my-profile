import 'dotenv/config'
import axios from 'axios'
import { getAccessToken } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

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

const updateBlog = async (blog) => {

    const response = await axios.put(URL, blog)
        .then(value => {
            return value.data.data
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

export async function POST(request) {
    const { accessToken } = await getAccessToken();

    const blog = await request.json()
    
    const response = await axios.post(URL, blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then((value) => value)
        .catch(err => {
            throw new Error(err)
        })
    console.log(response.data.data)
    if (response.status == 201) {
        return NextResponse.json(response.data.data)
    } else {
        throw new Error(response.status)
    }
}