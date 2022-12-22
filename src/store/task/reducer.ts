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
    SET_COMMENTS,
    SET_COMMENT,
} from './types';
import { Option, Task, TaskComment } from "../../types";

export type TasktState = {
    tasks: Task[];
    tasksDetail: { [key: string]: Task };
    tasksByProject: { [key: number]: Task[] };
    statuses: Option[];
    types: Option[];
    priorities: Option[];
    taskComments: { [key: string | number]: TaskComment[] };

};

export type TaskRootState = {
    task: TasktState;
}

const initialState = {
    tasks: [],
    tasksByProject: [],
    tasksDetail: {},
    statuses: [],
    types: [],
    priorities: [],
    taskComments: [],
};


export const taskReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case SET_TASK_BY_PROJECT:
            if (!action?.payload?.length) return state;
            const task: Task = action.payload[0]
            return {
                ...state, tasksByProject: {
                    ...state.tasksByProject,
                    [task.projectId]: action.payload
                }
            };
        case SET_TASK:
            return {
                ...state, tasksDetail: {
                    ...state.tasksDetail,
                    [action.payload?.id.toString()]: action?.payload
                }
            };
        case ADD_CRAETED_TASK:
            const tasks = state.tasksByProject[action.payload.projectId] || [];
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
            const { id, projectId }: Task = action.payload;
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
            case SET_COMMENTS:
                if (!action?.payload?.length) return state;
                const comment: TaskComment = action.payload[0];
                return {
                  ...state,
                  taskComments: {
                    ...state.taskComments,
                    [comment.taskId]: action.payload,
                  },
                };
          
              case SET_COMMENT:
                if (!action?.payload) return state;
                const createdComment = action.payload;
                const currentProjectCommentList =
                  [
                    ...state.taskComments[createdComment.taskId] || [],
                    createdComment,
                  ] || [];
                return {
                  ...state,
                  taskComments: {
                    ...state.taskComments,
                    [createdComment.taskId]: currentProjectCommentList,
                  },
                };
        default:
            return state;
    }
};