import { GET_PROJECTS, CREATE_PROJECT } from "./types";
import {CreatProjectRes, projectRepository} from "../../repository/projects";
import {logOut} from "../auth/actions";

export const getProjects = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await projectRepository.getAll();
        dispatch({
            type: GET_PROJECTS,
            payload: result.projects,
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
        console.log({ error });
        // dispatch(logOut());
    }
}