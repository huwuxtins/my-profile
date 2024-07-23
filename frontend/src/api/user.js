import 'dotenv/config'
import axios from 'axios'

const URL = process.env.URL + 'user'

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

export { updateUser }