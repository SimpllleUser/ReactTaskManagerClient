import { projectRepository } from "../../repositpry/project";
import { ProjectBase, ProjectCreateParams, ProjectDetail } from "../../types";
import { ADD_CRAETED_PROJECT, DELETE_PROJECT, SET_PROJECT, SET_PROJECT_BY_AUHTOR, SET_STATUSES } from "./types";

export const getProjectsByAuthor = (userId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.getAllByAuthorId(userId);
        dispatch({
            type: SET_PROJECT_BY_AUHTOR,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getProjectById = (projectId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.findOneById(projectId);
        dispatch({
            type: SET_PROJECT,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const createProject = (
    projectCreateParams: ProjectCreateParams,
) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.create(projectCreateParams);
        dispatch({
            type: ADD_CRAETED_PROJECT,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const updatedProject = (
    projectUpdateParams: ProjectDetail,
) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.update(projectUpdateParams);
        dispatch({
            type: SET_PROJECT,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const deleteProject = (
    id: number,
) => async (dispatch: any): Promise<any> => {
    try {
        await projectRepository.delete(id);
        dispatch({
            type: DELETE_PROJECT,
            payload: id,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getProjectStatuses = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.getStatuses();
        dispatch({
            type: SET_STATUSES,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}