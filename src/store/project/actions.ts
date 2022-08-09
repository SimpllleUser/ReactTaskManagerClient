import { dispatchWrapper } from "../../store";
import { ProjectRepository } from "../../repositpry/project";
import {
  ActionUserWithProjectParams,
  CommentCraeteParams,
  ProjectCreateParams,
  ProjectDetail,
} from "../../types";
import {
  ADD_CRAETED_PROJECT,
  DELETE_PROJECT,
  SET_COMMENT,
  SET_COMMENTS,
  SET_PROJECT,
  SET_PROJECT_BY_AUHTOR,
  SET_STATUSES,
  SET_USERS,
  UNSET_USERS,
} from "./types";
import { message, notification } from "antd";

export const getProjectsByAuthor = (userId: number) =>
  dispatchWrapper(
    ProjectRepository.getAllByAuthorId,
    userId,
    SET_PROJECT_BY_AUHTOR
  );
export const getProjectById = (projectId: number) =>
  dispatchWrapper(ProjectRepository.findOneById, projectId, SET_PROJECT);

export const createProject = (projectCreateParams: ProjectCreateParams) => {
  notification.success({
    message: 'Project was created',
  })
  return dispatchWrapper(
    ProjectRepository.create,
    projectCreateParams,
    ADD_CRAETED_PROJECT
  );
}

export const updatedProject = (projectUpdateParams: ProjectDetail) => {
  notification.success({
    message: 'Project was updated',
  });
  return dispatchWrapper(ProjectRepository.update, projectUpdateParams, SET_PROJECT);
}

export const deleteProject = (id: number) => {
  notification.success({
    message: 'Project was delted',
  })
  return dispatchWrapper(ProjectRepository.delete, id, DELETE_PROJECT);
}
  
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

export const projectCreateComment =
  (comment: CommentCraeteParams) =>
  dispatchWrapper(ProjectRepository.createComment, comment, SET_COMMENT);

