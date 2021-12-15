import axios from "axios";

const url = 'http://localhost:7000'

export type SignIn = {
    result: {
        token: string;
    };
};
export type ParamsSingIn = {
    email: string;
    password: string;
}

export type SIGN_IN_RESPONSE = { token: string };

export class authRepository {

    static async sigIn({email, password}: ParamsSingIn): Promise<SIGN_IN_RESPONSE> {
        const {data}: any = await axios.post(`${url}/auth/login`, {email, password});
        return data?.result;
    }

    static async signUp({email, password}: ParamsSingIn) {
        const {result}: SignIn = await axios.post(`${url}/registration`, {email, password});
        return result;
    }
}