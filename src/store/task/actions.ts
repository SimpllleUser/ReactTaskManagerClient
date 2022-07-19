import { taskRepository } from "../../repositpry/task";
import { TaskCreateParams, TaskUpdateParams } from "../../types";
import { ADD_CRAETED_TASK, DELETE_TASK, SET_PRIORITIES, SET_STATUSES, SET_TASK, SET_TASK_BY_PROJECT, SET_TYPES } from './types';

export const getTasksByProjectId = (projectId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.getAllTasksByProjectId(projectId);
        dispatch({
            type: SET_TASK_BY_PROJECT,
            payload: { projectId, tasks: result },
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getTaskById = (taskId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.findOneById(taskId);
        dispatch({
            type: SET_TASK,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const createTask = (
    taskCreateParams: TaskCreateParams,
) => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.create(taskCreateParams);
        dispatch({
            type: ADD_CRAETED_TASK,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const updatedTask = (
    taskUpdateParams: TaskUpdateParams,
) => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.update(taskUpdateParams);
        dispatch({
            type: SET_TASK,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const deleteTask = (
    id: number,
) => async (dispatch: any): Promise<any> => {
    try {
        await taskRepository.delete(id);
        dispatch({
            type: DELETE_TASK,
            payload: id,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getTaskStatuses = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.getStatuses();
        dispatch({
            type: SET_STATUSES,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getTaskTypes = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.getTypes();
        dispatch({
            type: SET_TYPES,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}
export const getTaskPriorities = () => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.getPriorities();
        dispatch({
            type: SET_PRIORITIES,
            payload: result,
        });
    } catch (error) {
        console.log('ERROR => ', error);
    }
}