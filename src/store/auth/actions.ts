import { LOG_OUT, SIGN_IN, SIGN_UP } from "./types";
import { authRepository, SignUpParams, T_PARAMS_SING_IN } from "../../repositpry/auth";

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

export const signUp = (params: SignUpParams) => async (dispatch: any): Promise<any> => {
    try {
        const result = await authRepository.signUp(params);
        dispatch({
            type: SIGN_UP,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null,
    };
}