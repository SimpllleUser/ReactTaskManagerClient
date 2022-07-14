import { projectRepository } from "../../repositpry/project";
import { SET_PROJECT_BY_AUHTOR} from "./types";

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