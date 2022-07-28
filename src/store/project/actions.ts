import { projectRepository } from "../../repositpry/project";
import {
  ActionUserWithProjectParams,
  ProjectCreateParams,
  ProjectDetail,
} from "../../types";
import {
  ADD_CRAETED_PROJECT,
  DELETE_PROJECT,
  SET_PROJECT,
  SET_PROJECT_BY_AUHTOR,
  SET_STATUSES,
  SET_USERS,
  UNSET_USERS,
} from "./types";

export const getProjectsByAuthor =
  (userId: number) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.getAllByAuthorId(userId);
    dispatch({
      type: SET_PROJECT_BY_AUHTOR,
      payload: result,
    });
  };
export const getProjectById =
  (projectId: number) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.findOneById(projectId);
    dispatch({
      type: SET_PROJECT,
      payload: result,
    });
  };
export const createProject =
  (projectCreateParams: ProjectCreateParams) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.create(projectCreateParams);
    dispatch({
      type: ADD_CRAETED_PROJECT,
      payload: result,
    });
  };
export const updatedProject =
  (projectUpdateParams: ProjectDetail) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.update(projectUpdateParams);
    dispatch({
      type: SET_PROJECT,
      payload: result,
    });
  };
export const deleteProject =
  (id: number) =>
  async (dispatch: any): Promise<any> => {
    await projectRepository.delete(id);
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  };
export const getProjectStatuses =
  () =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.getStatuses();
    dispatch({
      type: SET_STATUSES,
      payload: result,
    });
  };
export const addUsersToProject =
  (params: ActionUserWithProjectParams) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.addUsersToProject(params);
    dispatch({
      type: SET_USERS,
      payload: { projectId: params.projectId, users: result },
    });
  };
export const removeUsersFromProject =
  (params: ActionUserWithProjectParams) =>
  async (dispatch: any): Promise<any> => {
    const result = await projectRepository.deleteUsersFromProject(params);
    dispatch({
      type: UNSET_USERS,
      payload: { projectId: params.projectId, users: result },
    });
  };
