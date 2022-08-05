import {actionTypes, LOG_OUT, SIGN_IN,} from "./types";
import { UserAuthentificated } from "../../types";
import { setToken } from "../../plugins/axios";

export type AuthState = {
    userActive: UserAuthentificated 
};

export type AuthRootState = {
    auth: AuthState;
}
if(!localStorage?.userActive) localStorage.setItem('userActive', '{}'); 

const initialState = {
    userActive: JSON.parse(localStorage?.userActive) || '',
};

export const authReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.userActive = JSON.stringify(action.payload);
            setToken(action.payload?.token);
            return {...state, userActive: action.payload, token: action.payload.token };
        case LOG_OUT:
            localStorage.token = '';
            localStorage.userActive = '{}'
            return {...state, token: '', userActive: '{}'};
        default:
            return state;
    }
};