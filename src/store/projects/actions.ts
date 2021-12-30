import { GET_PROJECTS, CREATE_PROJECT } from "./types";
import {CreatProjectRes, projectRepository} from "../../repository/projects";
import {logOut} from "../auth/actions";

export const getProjects = (authorId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.getAll(authorId);
        console.log(result);
        dispatch({
            type: GET_PROJECTS,
            payload: result,
        });
    } catch (error) {
       // dispatch(logOut());
    }
}
export const createProject = (params:CreatProjectRes) => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.create(params);
        dispatch({
            type: CREATE_PROJECT,
            payload: result,
        });
    } catch (error) {
        console.log('createProject', error);
    }
}