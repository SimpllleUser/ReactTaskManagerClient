import {actionTypes, GET_USERS,} from "./types";
import { User } from "../../types";

export type UserState = {
    users: User[] 
    userActive: User 
};

export type UserRootState = {
    user: UserState;
}

const initialState = {
    users: [],
    userActive: JSON.parse(localStorage.getItem('userActive') || '{}'),
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