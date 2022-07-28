import { User } from "../../types";
export interface getUsers {
    type: typeof GET_USERS,
    payload: User[],
}


export const GET_USERS = 'USER/GET_USERS';

export type actionTypes = getUsers;