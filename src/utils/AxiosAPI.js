const axios = require('axios');
const myAxios = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_API}`,
    headers: { 'Authorization': JSON.stringify(localStorage.getItem('token')) }
});

export async function axiosGet(url) {
    return await myAxios.get(url);
}

export async function axiosPost(url, body) {
    return await myAxios.post(url, body)
}

