import { dispatchWrapper } from "..";
import { taskRepository } from "../../repositpry/task";
import {
  CommentCraeteParams,
  Task,
  TaskCreateParams,
  TaskUpdateParams,
} from "../../types";
import {
  ADD_CRAETED_TASK,
  DELETE_TASK,
  SET_COMMENT,
  SET_COMMENTS,
  SET_PRIORITIES,
  SET_STATUSES,
  SET_TASK,
  SET_TASK_BY_PROJECT,
  SET_TYPES,
  SET_UPDATED_TASK,
} from "./types";

export const getTasksByProjectId = (projectId: number) =>
  dispatchWrapper(
    taskRepository.getAllTasksByProjectId,
    projectId,
    SET_TASK_BY_PROJECT
  );

export const getTaskById = (taskId: number) =>
  dispatchWrapper(taskRepository.findOneById, taskId, SET_TASK);

export const createTask = (taskCreateParams: TaskCreateParams) =>
  dispatchWrapper(taskRepository.create, taskCreateParams, ADD_CRAETED_TASK);

export const updatedTask = (taskUpdateParams: TaskUpdateParams) =>
  dispatchWrapper(taskRepository.update, taskUpdateParams, SET_UPDATED_TASK);

export const deleteTask = (task: Task) =>
  dispatchWrapper(taskRepository.delete, task, DELETE_TASK, task);

export const getTaskStatuses = () =>
  dispatchWrapper(taskRepository.getStatuses, "", SET_STATUSES);

export const getTaskTypes = () =>
  dispatchWrapper(taskRepository.getTypes, "", SET_TYPES);

export const getTaskPriorities = () =>
  dispatchWrapper(taskRepository.getPriorities, "", SET_PRIORITIES);

export const getTaskComments = (projectId: number) =>
  dispatchWrapper(taskRepository.getComments, projectId, SET_COMMENTS);

export const taskCreateComment = (comment: CommentCraeteParams) =>
  dispatchWrapper(taskRepository.createComment, comment, SET_COMMENT);
