import 'dotenv/config'
import axios from 'axios'
import { getAccessToken } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

const URL = process.env.NEXT_PUBLIC_URL + 'user'

export async function GET(request, context) {
    const { accessToken } = await getAccessToken();

    const response = await axios.get(`${URL}/profile`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then((value) => value)
        .catch(err => {
            throw new Error(err)
        })

    console.log(response)

    if(response.status == 200){
        return NextResponse.json(response.data.data)
    } else {
        throw new Error(response.status)
    }

}