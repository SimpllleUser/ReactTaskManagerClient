import {
    actionTypes,
    SET_TASK_BY_PROJECT,
    SET_TASK,
    ADD_CRAETED_TASK,
    DELETE_TASK,
    SET_TYPES,
    SET_PRIORITIES,
    SET_STATUSES,
} from './types';
import { Option, Task } from "../../types";

export type TasktState = {
    tasks: Task[];
    tasksDetail: Task[];
    statuses: Option[];
    types: Option[];
    priorities: Option[];
};

export type TaskRootState = {
    task: TasktState;
}

const initialState = {
    tasks: [],
    tasksDetail: [],
    statuses: [],
    types: [],
    priorities: [],
};


export const taskReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SET_TASK_BY_PROJECT:
            return { ...state, tasks: action.payload };
        case SET_TASK:
            return {
                ...state, tasksDetail: {
                    ...state.tasksDetail,
                    [action.payload.id]: action.payload
                }
            };
        case ADD_CRAETED_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task: Task) => task.id !== action.payload),
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