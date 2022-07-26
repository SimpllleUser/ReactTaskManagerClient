import {
    actionTypes,
    SET_TASK_BY_PROJECT,
    SET_TASK,
    ADD_CRAETED_TASK,
    DELETE_TASK,
    SET_TYPES,
    SET_PRIORITIES,
    SET_STATUSES,
    SET_UPDATED_TASK,
} from './types';
import { Option, Task } from "../../types";

export type TasktState = {
    tasks: Task[];
    tasksDetail: Task[];
    tasksByProject: { [key: number]: Task[] };
    statuses: Option[];
    types: Option[];
    priorities: Option[];
};

export type TaskRootState = {
    task: TasktState;
}

const initialState = {
    tasks: [],
    tasksByProject: [],
    tasksDetail: [],
    statuses: [],
    types: [],
    priorities: [],
};


export const taskReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SET_TASK_BY_PROJECT:
            return {
                ...state, tasksByProject: {
                    ...state.tasksByProject,
                    [action.payload.projectId]: action.payload.tasks
                }
            };
        case SET_TASK:
            return {
                ...state, tasksDetail: {
                    ...state.tasksDetail,
                    [action.payload?.id]: action?.payload
                }
            };
        case ADD_CRAETED_TASK:
            const tasks = state.tasksByProject[action.payload.projectId];
            return {
                ...state, tasksByProject: {
                    ...state.tasksByProject,
                    [action.payload.projectId]: [...tasks, action.payload],
                }
            };
        case SET_UPDATED_TASK:
            const updatedTask: Task = action.payload;
            const taskListByProject: Task[] = state.tasksByProject[updatedTask.projectId] || [];
            return {
                ...state, tasksByProject: {
                    ...state.tasksByProject,
                    [updatedTask.projectId]: [updatedTask, ...taskListByProject?.filter(({ id }: Task) => +updatedTask.id !== +id)],
                }
            };
        case DELETE_TASK:
            const { id, projectId } = action.payload;
            const taskList: Task[] = state.tasksByProject[projectId] || [];
            return {
                ...state, tasksByProject: {
                    ...state.tasksByProject,
                    [projectId]: taskList?.filter((task: Task) => task.id !== id),
                }
            };
        case SET_STATUSES:
            return {
                ...state, statuses: action.payload,
            };
        case SET_TYPES:
            return {
                ...state, types: action.payload,
            };
        case SET_PRIORITIES:
            return {
                ...state, priorities: action.payload,
            };
        default:
            return state;
    }
};