import axios from "axios";
import { User} from "../types";
import { ResponseResult } from "./auth";

const url = 'http://localhost:7000/users'


export class userRepository {

    static async getAll(): Promise<User[]> {
        const response: any = await axios.get(`${url}`);
        return response;
    }
}