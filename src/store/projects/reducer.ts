import {actionTypes, GET_PROJECTS, CREATE_PROJECT} from "./types";
import './actions';
import {Project} from "../../interfaces";

export interface projectState {
    projects: [],
};

const initialState: projectState = {
    projects: [] ,
};

export const projectsReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case GET_PROJECTS:
            console.log(action.payload);
            return {...state, projects: action.payload};
        case CREATE_PROJECT:
            return {...state, projects: [action.payload, ...state.projects]};
        default:
            return state;
    }
};