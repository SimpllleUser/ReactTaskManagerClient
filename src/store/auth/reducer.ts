import {
    actionTypes,
    SIGN_IN,
} from "./types";
import './actions';

const initialState = {
    auth: {},
};

export const authReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.token = action.payload.token;
            return { ...state, token: action.payload.token };
        default:
            return state;
    }
};