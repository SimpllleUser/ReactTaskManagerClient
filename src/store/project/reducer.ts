import { actionTypes, SET_PROJECT, SET_PROJECT_BY_AUHTOR, SET_STATUSES, } from "./types";
import { Option, Project } from "../../types";

export type ProjectState = {
    projects: Project[];
    projectsDetail: Project[];
    statuses: Option[];
};

export type ProjectRootState = {
    project: ProjectState;
}

const initialState = {
    projects: [],
    projectsDetail: [],
    statuses: [],
};


export const projectReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SET_PROJECT_BY_AUHTOR:
            return { ...state, projects: action.payload };
        case SET_PROJECT:
            return {
                ...state, projectsDetail: {
                    ...state.projectsDetail,
                    [action.payload.id]: action.payload
                }
            };
        case SET_STATUSES:
            return {
                ...state, statuses: action.payload,
            };
        default:
            return state;
    }
};