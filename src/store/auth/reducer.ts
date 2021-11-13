import {actionTypes, LOG_OUT, SIGN_IN,} from "./types";
import './actions';

export type AuthState = {
    auth: {
        token: string;
    }
};

const initialState = {
    token: localStorage?.token || '',
};

export const authReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.token = action.payload.token;
            return {...state, token: action.payload.token};
        case LOG_OUT:
            localStorage.token = '';
            return {...state, token: ''};
        default:
            return state;
    }
};