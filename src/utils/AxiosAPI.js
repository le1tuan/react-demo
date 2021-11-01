const axios = require('axios');
const myAxios = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_API}`,
});

myAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

myAxios.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    if (401 === error.response.status) {
        const { data } = await axiosPost('/verify', {})
        localStorage.setItem('token', JSON.stringify(data.user))
    } else if (6969 === error.response.status) {
        localStorage.removeItem('token')
        window.location = "/login"
    } else {
        return Promise.reject(error);
    }
});

export async function axiosGet(url) {
    const data = await myAxios.get(url);
    return data
}

export async function axiosPost(url, body) {
    const data = await myAxios.post(url, body)
    if (data.isError) {
        return null;
    }
    return data
}

