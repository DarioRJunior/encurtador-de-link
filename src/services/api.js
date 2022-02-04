import axios from "axios";

export const key = "207721e2d7d83c59d1623ef3ac1d1a83038b2d8a";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;


