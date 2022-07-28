import { GET_USERS } from "./types";
import { userRepository } from "../../repositpry/user";

export const getUsers = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await userRepository.getAll();
        dispatch({
            type: GET_USERS,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}