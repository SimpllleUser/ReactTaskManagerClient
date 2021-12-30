import { GET_ME } from "./types";
import {usersRepository} from "../../repository/users";
import {logOut} from "../auth/actions";

export const getMe = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await usersRepository.getMe();
        dispatch({
            type: GET_ME,
            payload: result.currentUser,
        });
    } catch (error) {
       dispatch(logOut());
    }
}