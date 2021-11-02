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
    const { response } = error;
    // console.log(error.response, error.response.status)
    if (error.response && error.response.status && error.response.status === 401) {
        const { data } = await axiosPost('/verify', {})
        localStorage.setItem('token', JSON.stringify(data.user));
        error.config.headers['Authorization'] = 'Bearer ' + JSON.stringify(data.user);
        error.config.baseURL = undefined;
        return myAxios.request(error.config);
    } else if (error.response && error.response.status && error.response.status === 477) {
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

export async function axiosPost(url, body, options = {}) {
    const data = await myAxios.post(url, body, options)
    return data
}

