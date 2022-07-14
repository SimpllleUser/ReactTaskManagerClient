import axios from "axios";

const url = 'http://localhost:7000'

export type T_SING_IN = {
    result: {
        token: string;
    };
};

export type T_PARAMS_SING_IN = {
    login: string;
    password: string;
}

export type SIGN_IN_RESPONSE = { token: string };

export class authRepository {

    static async sigIn({login, password}: T_PARAMS_SING_IN): Promise<SIGN_IN_RESPONSE> {
        const {data}: any = await axios.post(`${url}/auth/login`, {login, password});
        return data?.result;
    }
    //
    // static async signUp({email, password}: T_PARAMS_SING_IN) {
    //     const {result}: T_SING_IN = await axios.post(`${url}/login`, {email, password});
    //     return result;
    // }
}