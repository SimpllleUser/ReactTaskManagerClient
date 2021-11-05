import {actionTypes, ISignIn, SIGN_IN, SIGN_UP} from "./types";
import {authRepository, T_PARAMS_SING_IN, T_SING_IN} from "../../repositpry/auth";

export const signIn = (params: T_PARAMS_SING_IN) => async (dispatch: any): Promise<any> => {
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

export const signUp = (params: T_PARAMS_SING_IN): actionTypes => {
    return {
        type: SIGN_UP,
        payload: params,
    };
}