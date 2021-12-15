import {Project} from "../../interfaces";

export interface IGetProjects {
    type: typeof GET_PROJECTS,
    payload: Project,
}

export interface ICreateProjects {
    type: typeof CREATE_PROJECT,
    payload: Project,
}

export const GET_PROJECTS = 'PROJECTS/GET_PROJECTS';
export const CREATE_PROJECT = 'PROJECTS/CREATE_PROJECTS';

export type actionTypes = IGetProjects | ICreateProjects;