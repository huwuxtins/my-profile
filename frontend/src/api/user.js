import 'dotenv/config'
import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL + 'user'

const getUser = async () => {
    const response = await axios.get(URL)
    .then((value) => {
        console.log(value)
        return value
    }).catch((err) => {
        console.error(err)
    });
}

const updateUser = async (user) => {
    const response = await axios.put(URL, user)
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

export { getUser, updateUser }