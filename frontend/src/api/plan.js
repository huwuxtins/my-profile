import 'dotenv/config'
import axios from 'axios'

const URL = process.env.URL + 'plan'

const getPlansByUserID = async (date) => {
    const response = await axios.get(URL)
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

const getPlanByID = async (planID) => {
    const response = await axios.get(`${URL}/${planID}`)
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

const addPlan = async (plan) => {

}

const updatePlan = async (plan) => {

}

const deletePlan = async (planID) => {

}

export { getPlansByUserID, getPlanByID, addPlan, updatePlan, deletePlan }