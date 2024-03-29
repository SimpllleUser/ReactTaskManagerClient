import { Option, Task, TaskComment } from "../../types";

export interface setTasksByProject {
  type: typeof SET_TASK_BY_PROJECT;
  payload: Task[];
}
export interface setTask {
  type: typeof SET_TASK;
  payload: Task;
}

export interface addCreatedTask {
  type: typeof ADD_CRAETED_TASK;
  payload: Task;
}
export interface setUpdatedTask {
  type: typeof SET_UPDATED_TASK;
  payload: Task;
}
export interface deleteTask {
  type: typeof DELETE_TASK;
  payload: Task;
}

export interface setStatuses {
  type: typeof SET_STATUSES;
  payload: Option[];
}
export interface setTypes {
  type: typeof SET_TYPES;
  payload: Option[];
}
export interface setPriorities {
  type: typeof SET_PRIORITIES;
  payload: Option[];
}

export interface getTaskComments {
  type: typeof SET_COMMENTS;
  payload: TaskComment[];
}
export interface createComment {
  type: typeof SET_COMMENT;
  payload: TaskComment;
}

export const SET_TASK_BY_PROJECT = "TASK/SET_TASK_BY_PROJECT";
export const SET_TASK = "TASK/SET_TASK";
export const ADD_CRAETED_TASK = "TASK/ADD_CRAETED_TASK";
export const SET_UPDATED_TASK = "TASK/SET_UPDATED_TASK";
export const DELETE_TASK = "TASK/DELETE_TASK";
export const SET_STATUSES = "TASKK/SET_STATUSES";
export const SET_TYPES = "TASK/SET_TYPES";
export const SET_PRIORITIES = "TASK/SET_PRIORITIES";
export const SET_COMMENTS = "TASK/SET_COMMENTS";
export const SET_COMMENT = "TASK/SET_COMMENT";

export type actionTypes =
  | setTasksByProject
  | setTask
  | addCreatedTask
  | deleteTask
  | setTypes
  | setPriorities
  | setUpdatedTask
  | getTaskComments
  | createComment
  | setStatuses;
