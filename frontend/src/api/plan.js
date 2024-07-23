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
    const response = await axios.post(URL, plan)
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

const updatePlan = async (plan) => {
    const response = await axios.put(URL, plan)
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

const deletePlan = async (planID) => {
    
    const response = await axios.delete(`${URL}/${planID}`)
        .then(value)
        .catch(err => {
            console.error(err)
        })

    if(response.status == 200){
        return response.data.data
    }else{
        throw new Error(response.status)
    }
}

export { getPlansByUserID, getPlanByID, addPlan, updatePlan, deletePlan }