import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";
import { NextResponse } from "next/server";

const URL = process.env.NEXT_PUBLIC_URL + 'blog'
export async function GET(request, context) {
    const { accessToken } = await getAccessToken();

    const response = await axios.get(`${URL}/all-blogs`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then((value) => value)
        .catch(err => {
            throw new Error(err)
        })

    if (response.status == 200) {
        return NextResponse.json(response.data.data)
    } else {
        throw new Error(response.status)
    }
}