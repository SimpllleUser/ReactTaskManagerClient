import axios from 'axios';

axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
axios.interceptors.response.use((res) => {
        return res;
    },
    (error) => {
        console.log(error);
    });