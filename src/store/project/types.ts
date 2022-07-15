import { Project, Option } from "../../types";

export interface setProjectsByAuthor {
    type: typeof SET_PROJECT_BY_AUHTOR,
    payload: Project[],
}
export interface setProject {
    type: typeof SET_PROJECT,
    payload: Project
}

export interface addCreatedProject {
    type: typeof ADD_CRAETED_PROJECT,
    payload: Project,
}
export interface setUpdatedProject {
    type: typeof SET_UPDATED_PROJECT,
    payload: Project,
}
export interface deleteProject {
    type: typeof DELETE_PROJECT,
    payload: number,
}

export interface setStatuses {
    type: typeof SET_STATUSES,
    payload: Option[],
}

export const SET_PROJECT_BY_AUHTOR = 'PROJECTS/SET_PROJECT_BY_AUHTOR';
export const SET_PROJECT = 'PROJECTS/SET_PROJECT';
export const SET_STATUSES = 'PROJECTS/SET_STATUSES';
export const ADD_CRAETED_PROJECT = 'PROJECTS/ADD_CRAETED_PROJECT';
export const SET_UPDATED_PROJECT = 'PROJECTS/SET_UPDATED_PROJECT';
export const DELETE_PROJECT = 'PROJECTS/DELETE_PROJECT';

export type actionTypes =
    setProjectsByAuthor |
    setProject |
    setStatuses |
    addCreatedProject |
    deleteProject |
    setUpdatedProject;