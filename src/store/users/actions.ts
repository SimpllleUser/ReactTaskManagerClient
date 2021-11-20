import { GET_ME } from "./types";
import {usersRepository} from "../../repositpry/users";

export const getMe = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await usersRepository.getMe();
        dispatch({
            type: GET_ME,
            payload: result.currentUser,
        });
    } catch (error) {
        console.log('GET ME: ', error);
    }
}