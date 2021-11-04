import axios from 'axios';

axios.interceptors.request.use((res) => {
        console.log(res);
        return res;
    },
    (error) => {
    console.log(error);
    return Promise.reject(error);
    });