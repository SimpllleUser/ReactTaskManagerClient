import {actionTypes, LOG_OUT, SIGN_IN,} from "./types";
import { UserAuthentificated } from "../../types";

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
            return {...state, userActive: action.payload};
        case LOG_OUT:
            localStorage.token = '';
            return {...state, token: ''};
        default:
            return state;
    }
};