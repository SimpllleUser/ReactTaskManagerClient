import axios from "axios";
import {User} from "../interfaces";

const url = 'http://localhost:7000/users';


interface resUser {
    result: { currentUser: User };
}

export class usersRepository {
    static async getMe() {
        const {data }= await axios.get(`${url}/me`);
        const {result}: resUser = data;
        return result;
    }
}