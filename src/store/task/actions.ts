import { taskRepository } from "../../repositpry/task";
import { Task, TaskCreateParams, TaskUpdateParams } from "../../types";
import {
  ADD_CRAETED_TASK,
  DELETE_TASK,
  SET_PRIORITIES,
  SET_STATUSES,
  SET_TASK,
  SET_TASK_BY_PROJECT,
  SET_TYPES,
  SET_UPDATED_TASK,
} from "./types";

export const getTasksByProjectId =
  (projectId: number) =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.getAllTasksByProjectId(projectId);
    dispatch({
      type: SET_TASK_BY_PROJECT,
      payload: { projectId, tasks: result },
    });
  };
export const getTaskById =
  (taskId: number) =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.findOneById(taskId);
    dispatch({
      type: SET_TASK,
      payload: result,
    });
  };
export const createTask =
  (taskCreateParams: TaskCreateParams) =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.create(taskCreateParams);
    dispatch({
      type: ADD_CRAETED_TASK,
      payload: result,
    });
  };
export const updatedTask =
  (taskUpdateParams: TaskUpdateParams) =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.update(taskUpdateParams);
    dispatch({
      type: SET_UPDATED_TASK,
      payload: result,
    });
  };
export const deleteTask =
  (task: Task) =>
  async (dispatch: any): Promise<any> => {
    await taskRepository.delete(task.id);
    dispatch({
      type: DELETE_TASK,
      payload: task,
    });
  };
export const getTaskStatuses =
  () =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.getStatuses();
    dispatch({
      type: SET_STATUSES,
      payload: result,
    });
  };
export const getTaskTypes =
  () =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.getTypes();
    dispatch({
      type: SET_TYPES,
      payload: result,
    });
  };
export const getTaskPriorities =
  () =>
  async (dispatch: any): Promise<any> => {
    const result = await taskRepository.getPriorities();
    dispatch({
      type: SET_PRIORITIES,
      payload: result,
    });
  };
