import {actionTypes, GET_USERS,} from "./types";
import { User } from "../../types";

export type UserState = {
    users: User[] 
};

export type UserRootState = {
    user: UserState;
}

const initialState = {
    users: [],
};

export const userReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload };
        // case LOG_OUT:
        //     localStorage.token = '';
        //     localStorage.userActive = '{}'
        //     return {...state, token: '', userActive: '{}'};
        default:
            return state;
    }
};