import {actionTypes, LOG_OUT, SIGN_IN, SIGN_UP} from "./types";
import {authRepository, ParamsSingIn} from "../../repositpry/auth";

export const signIn = (params: ParamsSingIn) => async (dispatch: any): Promise<any> => {
    try {
        const result = await authRepository.sigIn(params);
        dispatch({
            type: SIGN_IN,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}

export const signUp = (params: ParamsSingIn): actionTypes => {
    return {
        type: SIGN_UP,
        payload: params,
    };
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null,
    };
}