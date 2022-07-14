import { Project } from "../../types";

export interface setProjectsByAuthor {
    type: typeof SET_PROJECT_BY_AUHTOR,
    payload: Project[],
}

export const SET_PROJECT_BY_AUHTOR = 'PROJECTS/SET_PROJECT_BY_AUHTOR';


export type actionTypes = setProjectsByAuthor;