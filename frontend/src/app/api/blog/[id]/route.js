import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL + 'blog'
export async function GET(request, context) {
    const { accessToken } = await getAccessToken();
    const id = context.params.id

    const response = await axios.get(`${URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
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