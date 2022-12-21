import axios from "axios";

const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers
    })

    return data
}