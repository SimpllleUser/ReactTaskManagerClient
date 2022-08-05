import axios from "axios";
import { User, UserAuthentificated } from "../types";

const url = 'http://localhost:7000/auth'

export type T_SING_IN = {
    result: {
        token: string;
    };
};

export type T_PARAMS_SING_IN = {
    login: string;
    password: string;
}

export type SignUpParams = {
    login: string;
    password: string;
    name: string;
}

export type SIGN_IN_RESPONSE = { token: string };
export type ResponseResult<T> = { data: { result: T } }

export class authRepository {

    static async sigIn({ login, password }: T_PARAMS_SING_IN): Promise<UserAuthentificated> {
        const response: any = await axios.post(`${url}/login`, { login, password });
        return response;
    }

    static async signUp(params: SignUpParams): Promise<UserAuthentificated> {
        const response: any = await axios.post(`${url}/registration`, params);
        return response;
    }
}