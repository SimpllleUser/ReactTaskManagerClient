import axios from 'axios';

axios.interceptors.request.use((res) => {
        return res;
    },
    (error) => {
    console.log( 'ERROR HANDLE => ', error);
    });