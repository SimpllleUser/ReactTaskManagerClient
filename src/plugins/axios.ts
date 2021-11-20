import axios from 'axios';

axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.token}`}
axios.interceptors.request.use((res) => {
        return res;
    },
    (error) => {
    console.log( 'ERROR HANDLE => ', error);
    });