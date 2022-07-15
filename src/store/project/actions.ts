import { projectRepository } from "../../repositpry/project";
import { SET_PROJECT, SET_PROJECT_BY_AUHTOR, SET_STATUSES} from "./types";

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