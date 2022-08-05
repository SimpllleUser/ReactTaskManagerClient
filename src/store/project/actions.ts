import { dispatchWrapper } from "../../store";
import { ProjectRepository } from "../../repositpry/project";
import {
  ActionUserWithProjectParams,
  ProjectCreateParams,
  ProjectDetail,
} from "../../types";
import {
  ADD_CRAETED_PROJECT,
  DELETE_PROJECT,
  SET_COMMENTS,
  SET_PROJECT,
  SET_PROJECT_BY_AUHTOR,
  SET_STATUSES,
  SET_USERS,
  UNSET_USERS,
} from "./types";

export const getProjectsByAuthor = (userId: number) =>
  dispatchWrapper(
    ProjectRepository.getAllByAuthorId,
    userId,
    SET_PROJECT_BY_AUHTOR
  );
export const getProjectById = (projectId: number) =>
  dispatchWrapper(ProjectRepository.findOneById, projectId, SET_PROJECT);

export const createProject = (projectCreateParams: ProjectCreateParams) =>
  dispatchWrapper(
    ProjectRepository.create,
    projectCreateParams,
    ADD_CRAETED_PROJECT
  );

export const updatedProject = (projectUpdateParams: ProjectDetail) =>
  dispatchWrapper(ProjectRepository.update, projectUpdateParams, SET_PROJECT);

export const deleteProject = (id: number) =>
  dispatchWrapper(ProjectRepository.delete, id, DELETE_PROJECT);
  
export const getProjectStatuses = () =>
  dispatchWrapper(ProjectRepository.getStatuses, "", SET_STATUSES);

export const addUsersToProject =
  (params: ActionUserWithProjectParams) =>
  dispatchWrapper(ProjectRepository.addUsersToProject, params, SET_USERS);

export const removeUsersFromProject =
  (params: ActionUserWithProjectParams) =>
  dispatchWrapper(ProjectRepository.deleteUsersFromProject, params, UNSET_USERS);

export const getProjectComments =
  (projectId: number) =>
  dispatchWrapper(ProjectRepository.getComments, projectId, SET_COMMENTS);
  /// ! CREATE PROJECT COMMENT

