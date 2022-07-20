import axios from 'axios';
import { UserAuthentificated } from '../types';
const activeUser: UserAuthentificated = JSON.parse(localStorage?.getItem('userActive') || '{}');
console.log(activeUser);
axios.defaults.headers.common = {'Authorization': `Bearer ${activeUser.token}`}

axios.interceptors.request.use((res) => {
        return res;
    },
    (error) => {
    console.log( 'ERROR HANDLE => ', error);
    });