import {actionTypes, GET_PROJECTS} from "./types";
import './actions';
import {Project} from "../../interfaces";

export interface usersState {
    projects: [],
    currentUser: Project | null;
};

const initialState: usersState = {
    projects: [],
    currentUser: null,
};

export const usersReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {...state, projects: action.payload};
        default:
            return state;
    }
};