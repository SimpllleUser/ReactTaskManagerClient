import {
    SIGN_IN,
} from "./types";
import './actions';

const initialState = {
    auth: {},
};

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return console.log('RUN AUTH');
        default:
            return state;
    }
};