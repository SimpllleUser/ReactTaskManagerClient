import axios from "axios";
import { User} from "../types";
import { ResponseResult } from "./auth";

const url = 'http://localhost:7000/users'


export class userRepository {

    static async getAll(): Promise<User[]> {
        const { data }: ResponseResult<User[]> = await axios.get(`${url}`);
        return data?.result;
    }

    // static async signUp(params: SignUpParams): Promise<UserAuthentificated> {
    //     const { data }: ResponseResult<UserAuthentificated> = await axios.post(`${url}/registration`, params);
    //     return data.result;
    // }
}