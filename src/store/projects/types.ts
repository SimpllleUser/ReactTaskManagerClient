import {Project} from "../../interfaces";

export interface IGetProjects {
    type: typeof GET_PROJECTS,
    payload: Project,
}

export const GET_PROJECTS = 'PROJECTS/GET_PROJECTS';

export type actionTypes = IGetProjects;