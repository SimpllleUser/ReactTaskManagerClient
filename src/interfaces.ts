export interface UserRes {
    email: string;
    id: number;
    roles?: [Role];
    iat: number;
    exp: number;
}

export interface Role {
    id: number;
    value: string;
    description: string;
    users: User[];
}

export interface User {
    id: number;
    email: string;
    password: string;
    hashCode: string;
    isActive: boolean;
    roles: Role[];
    tasks: Task[];
    projects: Project[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    authorId: number;
    author: User;
    projectId: number;
    project: Project;
    statusId: number;
    status: StatusTask;
    typeId: number;
    type: TypeTask;
    priorityId: number;
    priority: TypeTask;
    executorId: number;
    executor: User;
}

export interface StatusProject {
    id: number;
    name: string;
    value: number;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tasks: Task[];
    team: User[];
    authorId: number;
    author: User;
    statusId: number;
    status: StatusProject;
}
export interface TypeTask  {
    id: number;
    name: string;
    value: number;
}

export interface StatusTask  {
    id: number;
    name: string;
    value: number;
}
