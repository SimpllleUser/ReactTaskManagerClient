import { GET_USERS } from "./types";
import { userRepository } from "../../repositpry/user";
import { dispatchWrapper } from "..";

export const getUsers = () => 
    dispatchWrapper(userRepository.getAll, '', GET_USERS)