import { Project } from "../../types";

export interface setProjectsByAuthor {
    type: typeof SET_PROJECT_BY_AUHTOR,
    payload: Project[],
}
export interface setProject {
    type: typeof SET_PROJECT,
    payload: Project
}

export const SET_PROJECT_BY_AUHTOR = 'PROJECTS/SET_PROJECT_BY_AUHTOR';
export const SET_PROJECT = 'PROJECTS/SET_PROJECT';


export type actionTypes = setProjectsByAuthor | setProject;