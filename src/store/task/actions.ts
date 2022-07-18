import { taskRepository } from "../../repositpry/task";
import { TaskCreateParams, TaskUpdateParams } from "../../types";
import { ADD_CRAETED_TASK, DELETE_TASK, SET_STATUSES, SET_TASK, SET_TASK_BY_PROJECT } from './types';

export const getTasksByProjectId = (userId: number) => async (dispatch: any): Promise<any> => {
    try {
        const result = await taskRepository.getAllTasksByProjectId(userId);
        dispatch({
            type: SET_TASK_BY_PROJECT,
            payload: result,
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
export const createProject = (
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
export const updatedProject = (
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
export const getProjectStatuses = () => async (dispatch: any): Promise<any> => {
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