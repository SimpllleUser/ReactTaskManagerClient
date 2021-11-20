import {SIGN_IN_RESPONSE, ParamsSingIn} from "../../repositpry/auth";

export interface ISignIn {
    type: typeof SIGN_IN,
    payload: SIGN_IN_RESPONSE,
}

export interface ISignUp {
    type: typeof SIGN_UP,
    payload: ParamsSingIn,
}
export interface ILogOut {
    type: typeof LOG_OUT,
    payload: null,
}

export const SIGN_IN = 'AUTH/SIGN_IN';
export const SIGN_UP = 'AUTH/SIGN_UP';
export const LOG_OUT = 'AUTH/LOG_OUT';

export type actionTypes = ISignIn | ISignUp | ILogOut;