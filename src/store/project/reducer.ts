import { actionTypes, SET_PROJECT, SET_PROJECT_BY_AUHTOR, } from "./types";
import { Project } from "../../types";

export type ProjectState = {
    projects: Project[];
    projectsDetail: Project[];
};

export type ProjectRootState = {
    project: ProjectState;
}

const initialState = {
    projects: [],
    projectsDetail: [],
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
        default:
            return state;
    }
};