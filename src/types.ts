export interface OptionGlobal {
    id: number;
    value: number;
    name: number;
}

export interface ProjectCreateParams {
    title: string;
    description: string;
    authorId: number;
    statusId: number;
}
export type ProjectDefault = ProjectCreateParams & {
    id: number
}

export type ProjectBase = ProjectDefault & {
    author: User;
    status: OptionGlobal;
    token: number;
};

export type ProjectDetail = ProjectBase & {
    statusId: number;
    createdAt: string;
    updatedAt: string;
    team: User[];
    status: OptionGlobal;
    tasks: Task[];
}

export interface User {
    id: number;
    login: string;
    name: string;
    isActive: boolean;
}
export interface Task {
    id: number;
    title: string;
    description: string;
    authorId: number;
    projectId: number;
    statusId: number;
    typeId: number;
    priorityId: number;
    executorId: number;
    createdAt: string;
    updatedAt: string;
    author: User;
    project: ProjectDetail;
    status: OptionGlobal;
    type: OptionGlobal;
    priority: OptionGlobal;
    executor: User;
}

export type UserAuthentificated = User & { token: number };
export interface Option {
    id: number | string;
    name: string;
    value: number;
};

export interface TaskCreateParams {
    title: string;
    description: string;
    authorId: number;
    typeId: number;
    priorityId: number;
    executorId: number;
    statusId: number;
    projectId: number;
}
export type TaskUpdateParams = TaskCreateParams & { id: number };

export type ActionUserWithProjectParams = {
    projectId: number;
    userIds: string[];
};
export type ActionUserWithProjectResult = {
    projectId: number;
    users: User[];
};