import { GET_PROJECTS } from "./types";
import {projectRepository} from "../../repositpry/projects";

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