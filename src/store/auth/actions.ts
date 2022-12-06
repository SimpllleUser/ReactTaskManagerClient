import { LOG_OUT, SIGN_IN } from "./types";
import {
  authRepository,
  SignUpParams,
  T_PARAMS_SING_IN,
} from "../../repositpry/auth";
import { dispatchWrapper } from "..";

export const signIn = (params: T_PARAMS_SING_IN) =>
  dispatchWrapper(authRepository.sigIn, params, SIGN_IN);

export const signUp = (params: SignUpParams) =>
  dispatchWrapper(authRepository.signUp, params, SIGN_IN);

export const logOut = () => ({ type: LOG_OUT })
