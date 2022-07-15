import { Project, Option } from "../../types";

export interface setProjectsByAuthor {
    type: typeof SET_PROJECT_BY_AUHTOR,
    payload: Project[],
}
export interface setProject {
    type: typeof SET_PROJECT,
    payload: Project
}

export interface setStatuses {
    type: typeof SET_STATUSES,
    payload: Option[],
}

export const SET_PROJECT_BY_AUHTOR = 'PROJECTS/SET_PROJECT_BY_AUHTOR';
export const SET_PROJECT = 'PROJECTS/SET_PROJECT';
export const SET_STATUSES = 'PROJECTS/SET_STATUSES';

export type actionTypes = setProjectsByAuthor | setProject | setStatuses;