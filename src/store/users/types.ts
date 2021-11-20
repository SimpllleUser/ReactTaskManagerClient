import {User} from "../../interfaces";

export interface IUsersMe {
    type: typeof GET_ME,
    payload: User,
}

export const GET_ME = 'USERS/GET_ME';

export type actionTypes = IUsersMe;