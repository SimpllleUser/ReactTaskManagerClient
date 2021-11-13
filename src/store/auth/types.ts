import {SIGN_IN_RESPONSE, T_PARAMS_SING_IN} from "../../repositpry/auth";

type T_SING_IN = {
    result: {
        token: string;
    };
};

export interface ISignIn {
    type: typeof SIGN_IN,
    payload: SIGN_IN_RESPONSE,
}

export interface ISignUp {
    type: typeof SIGN_UP,
    payload: T_PARAMS_SING_IN,
}
export interface ILogOut {
    type: typeof LOG_OUT,
    payload: null,
}

export const SIGN_IN = 'AUTH/SIGN_IN';
export const SIGN_UP = 'AUTH/SIGN_UP';
export const LOG_OUT = 'AUTH/LOG_OUT';

export type actionTypes = ISignIn | ISignUp | ILogOut;