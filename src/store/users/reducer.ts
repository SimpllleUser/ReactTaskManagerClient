import {actionTypes, GET_ME} from "./types";
import './actions';

export type usersState = {
    users: [],
    currentUser: any;
};

const initialState: usersState = {
    users: [],
    currentUser: {},
};

export const usersReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case GET_ME:
            return {...state, currentUser: action.payload};
        default:
            return state;
    }
};